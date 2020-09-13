import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BasketService } from '../basket.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId:string;
  purchaseItems;
  bodyText: string;
  constructor(private route: ActivatedRoute,
    private router: Router, private basket:BasketService, private modalService:ModalService) { 
      
    }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userid")
    let username = localStorage.getItem("username")
    if(!this.userId || !username){
      this.router.navigate(['/login'])
    }
    this.onPurchased("")

    this.bodyText = 'This text can be updated in modal 1';
  }

  onPurchased(e){
    this.basket.findById(this.userId).subscribe(res=>{
      this.purchaseItems = res;
    })
  }

  onErrorMessage(e){
    this.bodyText = e;
  }

  openModal(id: string) {
    this.modalService.open(id);
}

  closeModal(id: string) {
      this.modalService.close(id);
  }
}
