import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DataProductService } from 'src/app/table/services/data-products/data-product.service';
import { ClickOutsideDirective } from '../../directive/click-outside/click-outside.directive';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss'],
  imports: [ReactiveFormsModule, CommonModule, ClickOutsideDirective],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxFilterComponent {
  public isChecked: boolean = false;

  public isFilterOpened: boolean = false;

  @Output() clearFilter = new EventEmitter<string>();
  @Output() setFilter = new EventEmitter<void>();

  public controlField = this.dataService.dataForm.get('stock') as FormControl;

  constructor(private dataService: DataProductService) {}

  public toggleFilter(): void {
    this.isFilterOpened = !this.isFilterOpened;
  }

  public clickedOutside(): void {
    this.isFilterOpened = false;
  }

  public toggleChecked() {
    this.isChecked = !this.isChecked;
  }

  public applyFilter() {
    this.setFilter.emit();
    this.isFilterOpened = false;
  }

  public makeDefaultStock() {
    this.clearFilter.emit('stock');
    this.isFilterOpened = false;
  }
}
