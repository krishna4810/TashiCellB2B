import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  myGroup = new FormGroup({
    quantity: new FormControl(0)
  });
  disableOrderButton: boolean = false;
  myThumbnail="../../../assets/download.jpeg";
  myFullresImage="../../../assets/download.jpeg";
  constructor() {
  }

  ngOnInit(): void {
    this.disableOrderButton = true;
  }

  incrementValue() {
      this.disableOrderButton = false;
      this.quantity.setValue(this.quantity.value+ 1);
  }

  decrementValue() {
   this.quantity.value > 0 && this.quantity.setValue(this.quantity.value - 1);
   this.quantity.value === 0 && (this.disableOrderButton = true);
  }

  get quantity(): FormControl {
    return this.myGroup.controls['quantity'] as FormControl;
  }
}
