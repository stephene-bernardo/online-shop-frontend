import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { debounce, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products;
  types;
  currentTypeFilter='';
  text='';
  filterName='';
  modelChanged: Subject<string> = new Subject<string>();

  constructor(private route: ActivatedRoute,
    private router: Router, private product:ProductService) { 
      product.findAll().subscribe(res=>{
        this.products = res
      })
      product.findType().subscribe(res=> {
        this.types = res
      })
      this.modelChanged.pipe(debounceTime(300)).subscribe(text=>{
        this.text = text; 
        
        product.find(this.text , this.currentTypeFilter).subscribe(res=>{
          this.products = res;
        })
      })
    }

  ngOnInit(): void {
    let userid = localStorage.getItem("userid")
    let username = localStorage.getItem("username")
    if(!userid || !username){
      this.router.navigate(['/login'])
    }
  }

  onOptionsSelected(e){
    this.currentTypeFilter=e;
    this.product.find(this.text , this.currentTypeFilter).subscribe(res=>{
      this.products = res;
    })
  }

  onChanged(e){
    this.modelChanged.next(e);
  }

}
