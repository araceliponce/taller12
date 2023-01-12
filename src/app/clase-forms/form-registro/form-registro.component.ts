import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {


  //crear atributo de tipo formBuilder

constructor(private unFormBuilder: FormBuilder){}

  //estructura del formulario reactivo

  unRegistroForm = this.unFormBuilder.group({
    dni: ['', { validators: [Validators.required, Validators.pattern('[0-9]{8}')]   }],
    nombres: ['sinnombre',Validators.required],
    apellidos: ['dos apellidos',Validators.required],
    fechanac: ['',Validators.required],
    sueldo: ['999',Validators.required],
    comision: ['0.5',{ validators: [Validators.required,
                                  Validators.max(1),
                                  Validators.min(0.01)]   }]
  })


  //generar un metodo get para cada campo del formulario

  get dni(){ return this.unRegistroForm.get('dni'); }
  get nombres(){ return this.unRegistroForm.get('nombres'); }
  get apellidos(){ return this.unRegistroForm.get('apellidos'); }
  get fechanac(){ return this.unRegistroForm.get('fechanac'); }
  get sueldo(){ return this.unRegistroForm.get('sueldo'); }
  get comision(){ return this.unRegistroForm.get('comision'); }

  //generar el metodo on submit para guardar los datos del formulario dentro un array

  datos = new Array;
  exitoso = false;

  //al pulsar el boton de tipo submit que haya en el form
  onsubmit(){

    // si es invalido (o si es !valid), return
    if(this.unRegistroForm.invalid){
      console.log('registro no valido');
      return;
    }

    this.exitoso = true;
    this.datos.push(
      {
        'Dni': this.unRegistroForm.get('dni')?.value,
        'nombres': this.unRegistroForm.get('nombres')?.value,
        'apellidos': this.unRegistroForm.get('apellidos')?.value,
        'fecha de nac': this.unRegistroForm.get('fechanac')?.value,
        'sueldo': this.unRegistroForm.get('sueldo')?.value,
        'comision': this.unRegistroForm.get('comision')?.value,
      }
    )

    console.log(this.datos);

  }



  Refrescar(){
    location.reload();
  }



}
