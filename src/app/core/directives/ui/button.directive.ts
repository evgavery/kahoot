import {Directive, effect, ElementRef, input, Renderer2} from '@angular/core';

@Directive({
  selector: '[kahButton]'
})
export class ButtonDirective {
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input<boolean>(false);

  constructor(private el: ElementRef, private renderer: Renderer2) {
    effect(() => {
      this.renderer.setAttribute(this.el.nativeElement, 'type', this.type());
    });

    effect(() => {
      if (this.disabled()) {
        this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
      } else {
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
      }
    });

    this.renderer.addClass(this.el.nativeElement, 'pok-button');
  }

}
