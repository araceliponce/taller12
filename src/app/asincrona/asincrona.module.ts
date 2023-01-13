import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { NgxErrorsModule } from '@ngspot/ngx-errors';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxErrorsModule.configure({
      showErrorsWhenInput:'touched',
      showMaxErrors:1
    })
  ],
  exports:[
    FormComponent
  ]
})
export class AsincronaModule { }
