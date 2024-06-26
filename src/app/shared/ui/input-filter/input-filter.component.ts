import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IData } from 'src/app/table/interface/data.interface';
import { DataProductService } from 'src/app/table/services/data-products/data-product.service';
import { ClickOutsideDirective } from '../../directive/click-outside/click-outside.directive';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.scss'],
  imports: [ReactiveFormsModule, CommonModule, ClickOutsideDirective],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFilterComponent implements OnInit {
  @Input({ required: true }) field!: keyof IData;
  @Output() clearFilter = new EventEmitter<string>();
  @Output() setFilter = new EventEmitter<void>();

  public controlField!: FormControl;
  public isFilterOpened: boolean = false;

  constructor(private dataService: DataProductService) {}

  ngOnInit() {
    this.controlField = this.dataService.dataForm.get(
      this.field
    ) as FormControl;
  }

  public toggleFilter(event: Event): void {
    event.stopPropagation();
    this.isFilterOpened = !this.isFilterOpened;
  }

  public clickedOutside(): void {
    this.isFilterOpened = false;
  }

  public clearFilterField() {
    this.dataService.clearField(this.field);
  }

  public applyFilter() {
    this.setFilter.emit();
    this.isFilterOpened = false;
  }

  public resetFilter() {
    this.clearFilter.emit(this.field);
    this.isFilterOpened = false;
  }
}
