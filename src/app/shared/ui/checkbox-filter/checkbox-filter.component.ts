import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DataProductService } from 'src/app/table/services/data-products/data-product.service';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss'],
  imports: [ReactiveFormsModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxFilterComponent {
  public isChecked: boolean = false;

  @Output() clearFilter = new EventEmitter<string>();
  @Output() setFilter = new EventEmitter<void>();

  public controlField = this.dataService.dataForm.get('stock') as FormControl;

  constructor(private dataService: DataProductService) {}

  toggleChecked() {
    this.isChecked = !this.isChecked;
  }

  applyFilter() {
    this.setFilter.emit();
  }

  makeDefaultStock() {
    this.clearFilter.emit('stock');
  }
}
