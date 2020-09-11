import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products;
  constructor(private route: ActivatedRoute,
    private router: Router, private product:ProductService) { 
      product.findAll().subscribe(res=>{
        this.products = res
      })
    }

  ngOnInit(): void {
    let userid = localStorage.getItem("userid")
    let username = localStorage.getItem("username")
    if(!userid || !username){
      this.router.navigate(['/login'])
    }
  }

}
