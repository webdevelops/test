import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bold]'
})
export class BoldDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.elementRef.nativeElement.style.fontWeight = "bold";
    this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
  }
}