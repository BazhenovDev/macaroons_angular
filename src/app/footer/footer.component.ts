import { Component, OnInit } from '@angular/core';
import {socialData} from "../../utils/social-data";
import {SocialDataType} from "../types/social-data.type";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  public socialData: SocialDataType = socialData

  ngOnInit(): void {
  }

}
