import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Injectable({
  providedIn: 'root',
})
export class DataFormService {
  constructor(private fb: FormBuilder) {}

 getDataFormGroup(): FormGroup {
    return this.fb.group({
      title: [null as string | null],
      brand: [null as string | null],
      attributes: [null as number | null],
      price: [null as number | null],
      stock: [null as boolean | null],
    });
  }
}
