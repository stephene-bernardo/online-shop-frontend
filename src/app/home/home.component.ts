import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId:string;
  purchaseItems;
  constructor(private route: ActivatedRoute,
    private router: Router, private basket:BasketService) { 
      
    }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userid")
    let username = localStorage.getItem("username")
    if(!this.userId || !username){
      this.router.navigate(['/login'])
    }
    this.onPurchased("")
  }

  onPurchased(e){
    this.basket.findById(this.userId).subscribe(res=>{
      console.log(res)
      this.purchaseItems = res;
    })
  }
}
