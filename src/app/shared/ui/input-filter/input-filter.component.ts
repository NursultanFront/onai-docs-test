import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IData } from 'src/app/table/interface/data.interface';
import { DataProductService } from 'src/app/table/services/data-products/data-product.service';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.scss'],
  imports: [ReactiveFormsModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFilterComponent implements OnInit {
  @Input({ required: true }) field!: keyof IData;
  @Output() clearFilter = new EventEmitter<string>();
  @Output() setFilter = new EventEmitter<void>();

  public controlField!: FormControl;

  constructor(private dataService: DataProductService) {}

  ngOnInit() {
    this.controlField = this.dataService.dataForm.get(
      this.field
    ) as FormControl;
  }

  applyFilter() {
    this.setFilter.emit();
  }

  clearSearchField() {
    this.clearFilter.emit(this.field);
  }
}
