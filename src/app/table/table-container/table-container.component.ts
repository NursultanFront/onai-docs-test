import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { InputFilterComponent } from '../../shared/ui/input-filter/input-filter.component';
import { CommonModule } from '@angular/common';
import { IData } from '../interface/data.interface';
import { DataProductService } from '../services/data-products/data-product.service';
import { Observable } from 'rxjs';
import { CheckboxFilterComponent } from '../../shared/ui/checkbox-filter/checkbox-filter.component';
import { ClickOutsideDirective } from 'src/app/shared/directive/click-outside/click-outside.directive';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    InputFilterComponent,
    CheckboxFilterComponent,
    ClickOutsideDirective,
  ],
})
export class TableContainerComponent {
  public dataList$: Observable<IData[]> = this.dataService.datas$;

  constructor(private dataService: DataProductService) {}

  public applyFilter() {
    this.dataService.filterDataByFields();
  }

  public resetField(field: string) {
    this.dataService.clearField(field);
  }
}
