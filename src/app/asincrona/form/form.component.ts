import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {




  constructor(private otroFormBuilder: FormBuilder){}


  otroRegistroForm = this.otroFormBuilder.group({
    nombre: ['', { validators: [Validators.required, Validators.pattern('[a-zA-Z]')]   }],
    email: ['',Validators.required],
    telefono: ['',Validators.pattern('[0-9]{9}')],
    asunto: ['',Validators.required],
    mensaje: ['0.5',Validators.maxLength(777)]
  
  })


  //generar un metodo get para cada campo del formulario

  get nombre(){ return this.otroRegistroForm.get('nombre'); }
  get email(){ return this.otroRegistroForm.get('email'); }
  get telefono(){ return this.otroRegistroForm.get('telefono'); }
  get asunto(){ return this.otroRegistroForm.get('asunto'); }
  get mensaje(){ return this.otroRegistroForm.get('mensaje'); }

  //generar el metodo on submit para guardar los datos del formulario dentro un array

  datos = new Array;
  exitoso = false;

  //al pulsar el boton de tipo submit que haya en el form
  onsubmit(){

    // si es invalido (o si es !valid), return
    if(this.otroRegistroForm.invalid){
      console.log('registro no valido');
      return;
    }

    this.exitoso = true;
    this.datos.push(
      {
        'Nombre': this.otroRegistroForm.get('nombres')?.value,
        'Email': this.otroRegistroForm.get('email')?.value,
        'Telefono': this.otroRegistroForm.get('telefono')?.value,
        'Asunto': this.otroRegistroForm.get('asunto')?.value,
        'Mensaje': this.otroRegistroForm.get('mensaje')?.value,
      }
    )

    console.log(this.datos);

  }



  /* valdemort */

}
