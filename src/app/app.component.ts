import {Component} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {CatalogType} from "./types/catalog.type";
import {OrderType} from "./types/order.type";
import {SocialDataType} from "./types/social-data.type";

@Component({
  selector: 'macaroons-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

  public catalogItems: CatalogType[] = [
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

  public orderData: OrderType = {
    macaroon: '',
    name: '',
    phone: ''
  }

  public scrollTo(element: HTMLElement): void {
    element.scrollIntoView({ behavior: "smooth" });
  }

  public addToCart(item: string, element: HTMLElement): void {
    this.scrollTo(element)
    this.orderData.macaroon = item.toUpperCase();
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
    return;
  }

}
