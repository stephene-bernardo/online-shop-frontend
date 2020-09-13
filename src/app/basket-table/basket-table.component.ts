import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket-table',
  templateUrl: './basket-table.component.html',
  styleUrls: ['./basket-table.component.css']
})
export class BasketTableComponent implements OnInit {
  @Input() purchaseItems:any;
  @Output() removeItem = new EventEmitter<any>();

  constructor(private basket:BasketService) { }

  ngOnInit(): void {
  }

  cancelOrder(id){
    this.basket.remove(id).subscribe(()=>{
      this.removeItem.emit("");
    })
  }

}
