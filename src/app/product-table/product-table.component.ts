import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { debounce, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BasketService } from '../basket.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  @Input() userId: string;
  @Output() onPurchased = new EventEmitter<any>();
  products;
  types;
  currentTypeFilter='';
  filterName='';
  modelChanged: Subject<string> = new Subject<string>();
  constructor( private product:ProductService, private basket:BasketService) {
    product.findAll().subscribe(res=>{
          this.products = res
        })
    product.findType().subscribe(res=> {
      this.types = res
    })
    this.modelChanged.pipe(debounceTime(300)).subscribe(text=>{
      this.filterName = text; 
      
      product.find(this.filterName , this.currentTypeFilter).subscribe(res=>{
        this.products = res;
      })
    })

  }

  ngOnInit(): void {
  }

  onOptionsSelected(e){
    this.currentTypeFilter=e;
    this.product.find(this.filterName , this.currentTypeFilter).subscribe(res=>{
      this.products = res;
    })
  }

  onChanged(e){
    this.modelChanged.next(e);
  }

  purchase(productId){
    let quantity = (<HTMLInputElement>document.getElementById(`id_${productId}`)).value;
    (<HTMLInputElement>document.getElementById(`id_${productId}`)).value=""
    this.basket.insert(this.userId, productId, quantity).subscribe(res => {
      this.onPurchased.emit(res);
    })
  }

}
