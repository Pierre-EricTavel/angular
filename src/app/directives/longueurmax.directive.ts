import { Directive, ElementRef, Input, OnInit, Renderer } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[longueurmax]'
})
export class LongueurmaxDirective implements OnInit {

  @Input() longueurmax: number;
  
  constructor(private element: ElementRef, private renderer: Renderer ) { }

 ngOnInit(): void {
  this.renderer.listen(this.element.nativeElement, 'keypress', (event) => {
     if (this.element.nativeElement.value.length > this.longueurmax) {
        this.element.nativeElement.value = 0;
      }
    });
  }
}

