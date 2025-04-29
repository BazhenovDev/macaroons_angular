import {Component} from '@angular/core';
import {socialData} from "../../utils/social-data";
import {SocialDataType} from "../../types/social-data.type";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public socialData: SocialDataType = socialData;

  isActiveMenu: boolean = false;

  checkMenu(): void {
    this.isActiveMenu = !this.isActiveMenu;
  }
}
