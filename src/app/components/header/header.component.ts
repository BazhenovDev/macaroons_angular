import {Component, HostListener} from '@angular/core';
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
  isMobile: boolean = window.innerWidth <= 480;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 480;
  }

  checkMenu(): void {
    if (this.isMobile) {
      this.isActiveMenu = !this.isActiveMenu;
    }
  }
}
