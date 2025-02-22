import {ChangeDetectionStrategy, Component, computed, input, output} from '@angular/core';
import {ButtonDirective} from '../../core/directives/ui/button.directive';

@Component({
  selector: 'kah-paginator',
  imports: [
    ButtonDirective
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {
  totalItems = input(0);
  pageSize = input(10);
  currentPage = input(1);

  pageChange = output<number>();

  totalPages = computed(() => this.pageSize() ? Math.ceil(this.totalItems() / this.pageSize()) : 0);
  prevDisabled = computed(() => (this.currentPage() === 1));
  nextDisabled = computed(() => this.currentPage() >= this.totalPages());

  previousPage(): void {
    if (this.prevDisabled()) return;
    this.pageChange.emit(this.currentPage() - 1);
  }

  nextPage(): void {
    if (this.nextDisabled()) return;
    this.pageChange.emit(this.currentPage() + 1);
  }
}
