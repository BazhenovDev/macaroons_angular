import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CatalogType} from "../../types/catalog.type";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  @Input() product: CatalogType;
  @Output() addToCartEvent: EventEmitter<CatalogType> = new EventEmitter<CatalogType>();

  constructor() {
    this.product = {
      image: '',
      title: '',
      price: '',
    }
  }

  ngOnInit(): void {
  }

  public addProductToCart(): void {
    this.addToCartEvent.emit(this.product);
  }
}
