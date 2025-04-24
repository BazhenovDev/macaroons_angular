import { Injectable } from '@angular/core';
import {CatalogType} from "../types/catalog.type";

@Injectable()
export class ProductsService {
  constructor() { }
  public getProducts(): CatalogType[] {
    return [
      {
        image: '1.png',
        title: 'Макарун с малиной',
        price: '1,70'
      },
      {
        image: '2.png',
        title: 'Макарун с манго',
        price: '1,70'
      },
      {
        image: '3.png',
        title: 'Макарун с ванилью',
        price: '1,70'
      },
      {
        image: '4.png',
        title: 'Макарун с фисташками',
        price: '1,70'
      },
    ];
  }
}
