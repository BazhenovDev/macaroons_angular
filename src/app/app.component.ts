import {Component, OnInit} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {CatalogType} from "./types/catalog.type";
import {OrderType} from "./types/order.type";
import {ProductsService} from "./services/products.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'macaroons-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private productsService: ProductsService,
              public cartService: CartService,) {
  }

  public catalogItems: CatalogType[] = []

  public advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];

  ngOnInit() {
    this.catalogItems = this.productsService.getProducts();
  }

  public orderData: OrderType = {
    macaroon: '',
    name: '',
    phone: ''
  }

  public scrollTo(element: HTMLElement): void {
    element.scrollIntoView({ behavior: "smooth" });
  }

  public addToCart(item: CatalogType, element: HTMLElement): void {
    this.scrollTo(element)
    this.orderData.macaroon = item.title.toUpperCase();
    const price: string = item.price.replace(',', '.');
    this.cartService.priceInCart += +price.replace(',', '.');
    this.cartService.productInCart++
    alert(`${item.title} добавлен в корзину!`);
  }

  public showPresent: boolean = true;

  public createOrder(): void {
    if (!this.orderData.macaroon) {
      alert('Выберите макарун!');
      return;
    }
    if (!this.orderData.name) {
      alert('Введите ваше имя!');
      return;
    }
    if (!this.orderData.phone) {
      alert('Введите ваш номер телефона!');
      return;
    }

    alert('Ваш заказ принят в обработку. В ближайшее время мы с Вами свяжемся для уточнения заказа!');
    this.orderData.macaroon = '';
    this.orderData.name = '';
    this.orderData.phone = '';
    this.cartService.productInCart = 0;
    this.cartService.priceInCart = 0;
    return;
  }

}
