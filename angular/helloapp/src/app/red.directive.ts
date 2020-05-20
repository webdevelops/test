import { Directive, ElementRef, HostListener, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[red]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class RedDirective implements OnInit {
  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.fontWeight = "bold";
    // this.element.nativeElement.style.color = "red";
    this.element.nativeElement.style.cursor = "pointer";
    this.element.nativeElement.style.fontSize = this.defaultSize;
  };

  @Input() defaultSize = "14px";
  @Input() selectedSize = "18px";

  ngOnInit() {
    this.fontSize = this.defaultSize;
  }

  private fontSize: string;
  private setColorRed(val: string) {
    this.element.nativeElement.style.color = val;
  };

  @HostBinding("style.fontSize") get getFontSize() {
    return this.fontSize;
  }

  // @HostListener("mouseenter") onMouseEnter() {
  onMouseEnter() {
    this.setColorRed("red");
    this.fontSize = this.selectedSize;
  };

  // @HostListener("mouseleave") onMouseLeave() {
  onMouseLeave() {
    this.element.nativeElement.style.color = "black";
    this.fontSize = this.defaultSize;
  };

  
}

