import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[bgButton]'
})
export class BgButtonDirective implements OnInit {

  @Input() backgroundButtonDefault: string = 'linear-gradient(90deg, rgb(113,8,30) 0%, rgb(215,72,92) 100%)';
  @Input() backgroundButtonHover: string = 'linear-gradient(90deg, rgb(190, 13, 52) 0%, rgb(114, 24, 37) 100%)';

  constructor() {
  }

  private _bgColor: string = '';

  @HostBinding('style.background')
  get getBgColor() {
    return this._bgColor;
  }

  @HostListener('mouseenter')
  onHover() {
    this.changeBgColor(this.backgroundButtonHover);
  }

  @HostListener('mouseleave')
  onLeave() {
    this.changeBgColor(this.backgroundButtonDefault);
  }

  ngOnInit() {
    this.changeBgColor(this.backgroundButtonDefault);
  }

  changeBgColor(color: string) {
    this._bgColor = color;
  }

}
