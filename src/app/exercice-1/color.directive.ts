import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:keydown', ['$event']) windowKeydown($event) {
    switch ($event.key) {
      case 'ArrowUp':
        this.changeColor('red');
        break;
      case 'ArrowDown':
        this.changeColor('blue');
        break;
      case 'ArrowLeft':
        this.changeColor('green');
        break;
      case 'ArrowRight':
        this.changeColor('orange');
        break;
      default :
        this.changeColor('black');
        break;
    }
  }

  changeColor(nwColor: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', nwColor);
  }

}
