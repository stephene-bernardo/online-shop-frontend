import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketTableComponent } from './basket-table.component';

describe('BasketTableComponent', () => {
  let component: BasketTableComponent;
  let fixture: ComponentFixture<BasketTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
