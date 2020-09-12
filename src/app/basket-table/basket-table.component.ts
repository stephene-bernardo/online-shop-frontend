import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basket-table',
  templateUrl: './basket-table.component.html',
  styleUrls: ['./basket-table.component.css']
})
export class BasketTableComponent implements OnInit {
  @Input() purchaseItems:any;

  constructor() { }

  ngOnInit(): void {
  }

}
