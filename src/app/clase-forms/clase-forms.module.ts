import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { FormListadoComponent } from './form-listado/form-listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormRegistroComponent,
    FormListadoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormRegistroComponent,
    FormListadoComponent
  ],
})
export class ClaseFormsModule { }
