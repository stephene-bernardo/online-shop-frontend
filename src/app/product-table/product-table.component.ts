import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { debounce, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  products;
  types;
  currentTypeFilter='';
  filterName='';
  modelChanged: Subject<string> = new Subject<string>();
  constructor( private product:ProductService) {
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

}
