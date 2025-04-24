import {Component, Input, OnInit} from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";

@Component({
  selector: 'advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})
export class AdvantagesComponent implements OnInit {

  @Input() advantage: AdvantageType;
  @Input() index: number = 0;

  constructor() {
    this.advantage = {
      title: '',
      description: '',
    }
  }

  ngOnInit(): void {
  }

}
