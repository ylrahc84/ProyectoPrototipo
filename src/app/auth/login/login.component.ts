import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuariosService } from '../../services/usuarios.service';
import { loginForm } from '../../interfaces/login-form.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public formSubmitted:boolean = false;

  //Creamos una Propiedad con la estructura del Formulario 
  public loginForm = this.fb.group({
    usuario : ['', Validators.required],
    clave: ['', Validators.required],
    modulo: ['ADMIN', Validators.required],
    unidad: ['HESTAB', Validators.required],
  });
 
  //Hay que hacer inyeccion de dependencias para las siguientes funcionalidades:
  // 1.- FormBuilder = Para trabajar con Formularios Reactivos
  // 2.- UsuariosService = El servicio donde tenemos el enlace con la API
  // 3.- Router = Para trabajar Rutas en Angular
  constructor( private router:Router,
    private fb:FormBuilder,
    private usuarioServices: UsuariosService
   ) {}

  //Esta Propiedad lo que hace es validar los campos Null del Formulario
  private sanitizeFormValue(formValues:any):loginForm{
    return{
      usuario : formValues.usuario  || '',
      clave   : formValues.clave    || '',
      modulo  : formValues.modulo   || '',
      unidad  : formValues.unidad   || ''
    };
  }

  private getFormValidationErrors() {
    Object.keys(this.loginForm.controls).forEach(key => {
      const control = this.loginForm.get(key);
      if (control) { // Verificación para asegurarse de que el control no es null
        const controlErrors = control.errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Control: ' + key + ', Error: ' + keyError + ', Value: ', controlErrors[keyError]);
          });
        }
      }
    });
  }

  //Funcion o Metodo para Login
  login(){
    /*
    this.formSubmitted =true;
    
    if (this.loginForm.invalid) {
      console.log('Formulario no es correcto');
      this.getFormValidationErrors();
      return;
      
    } else {
      console.log('Posteando formulario');
    }

    this.usuarioServices.login(this.sanitizeFormValue(this.loginForm.value))
    .subscribe( resp =>{
      console.log(resp);
*/
      this.router.navigateByUrl('/');
/*
    },(err)=>{
      Swal.fire('Error', err.error.msg, 'error' );
    } );
*/
    
  }

}
