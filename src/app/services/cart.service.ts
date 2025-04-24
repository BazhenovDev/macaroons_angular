import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() {
  }
  public productInCart: number = 0;
  public priceInCart: number = 0;
}
