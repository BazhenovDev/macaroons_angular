import {Component} from '@angular/core';
import {socialData} from "../../utils/social-data";
import {SocialDataType} from "../types/social-data.type";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public socialData: SocialDataType = socialData;

  public showMenu(target: HTMLElement): void {
    target.classList.add('open');
  }

  public closeMenu(target: HTMLElement): void {
    target.classList.remove('open');
  }

}
