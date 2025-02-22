import { Directive, OnDestroy } from '@angular/core';
import {Subject} from 'rxjs';

@Directive({
  selector: '[kahDestroySub]'
})
export class DestroySubDirective implements OnDestroy {
  destroy$ = new Subject<void>();

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
