import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IData } from '../../interface/data.interface';
import { data } from '../../mocks/mock-data';
import { DataFormService } from '../data-forms/data-form.service';
import { FormControl, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root',
})
export class DataProductService {
  private originalData$ = new BehaviorSubject<IData[]>([...data]);
  private dataList$ = new BehaviorSubject<IData[]>([...data]);
  public datas$ = this.dataList$.asObservable();

  public dataForm = this.dataFormService.getDataFormGroup();

  constructor(private readonly dataFormService: DataFormService) {}

  private getFormControl(fieldName: string): FormControl {
    return this.dataForm.get(fieldName) as FormControl;
  }

  public filterDataByFields(): void {
    const title = this.getFormControl('title').value;
    const brand = this.getFormControl('brand').value;
    const attributes = Number(this.getFormControl('attributes').value);
    const price = Number(this.getFormControl('price').value);
    const stock = this.getFormControl('stock').value;

    const filteredItems = this.originalData$.getValue().filter(item => (
      (title ? item.title.toLowerCase().includes(title.toLowerCase().trim()) : true) &&
      (brand ? item.brand.toLowerCase().includes(brand.toLowerCase().trim()) : true) &&
      (attributes ? item.attributes === attributes : true) &&
      (price ? item.price === price : true) &&
      (stock !== null ? (stock ? item.stock > 0 : item.stock === 0) : true)
    ));

    this.dataList$.next(filteredItems);
  }

  public clearField(field: string) {
    this.getFormControl(field).setValue(null);
    this.filterDataByFields()
  }
}
