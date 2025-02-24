import {Directive, effect, ElementRef, inject, input, Renderer2} from '@angular/core';

@Directive({
  selector: '[kahButton]'
})
export class ButtonDirective {

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input<boolean>(false);

  constructor() {
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
