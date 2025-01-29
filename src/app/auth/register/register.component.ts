import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuariosService } from '../../services/usuarios.service';
import { RegisterForm } from '../../interfaces/register-form.interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls:['./register.component.css']
})
export class RegisterComponent {

  public formSubmitted = false;

  //Creamos una Propiedad con la estructura del Formulario 
  public registerForm = this.fb.group({
    proceso         : ['1',Validators.required],
    usuarioId       : ['0',Validators.required],
    usuario         : ['LUCAS',Validators.required],
    password        : ['LUCAS',Validators.required],
    nombreUsuario   : ['LUCAS',Validators.required],
    apellidoUsuario : ['LUCAS',Validators.required],
    email           : ['LUCAS@GMAIL.COM',Validators.required],
    idReserva       : [''],
    numeroHabitacion: [''],
    role            : ['ADMIN',Validators.required],
    fechaCreacion   : ['01/07/2024',Validators.required],
    fechaLogeo      : ['01/07/2024',Validators.required],
  });

  //Hay que hacer inyeccion de dependencias para las siguientes funcionalidades:
  // 1.- FormBuilder = Para trabajar con Formularios Reactivos
  // 2.- UsuariosService = El servicio donde tenemos el enlace con la API
  // 3.- Router = Para trabajar Rutas en Angular
  constructor( private fb:FormBuilder,
    private usuarioServices: UsuariosService,
    private router:Router 
  ) {  }
 
  //Esta Propiedad lo que hace es validar los campos Null del Formulario
  private sanitizeFormValue(formValue: any): RegisterForm {
    return {
      proceso         : formValue.proceso           || '',
      usuarioId       : formValue.usuarioId         || '',
      usuario         : formValue.usuario           || '',
      password        : formValue.password          || '',
      nombreUsuario   : formValue.nombreUsuario     || '',
      apellidoUsuario : formValue.apellidoUsuario   || '',
      email           : formValue.email             || '',
      idReserva       : formValue.idReserva         || '',
      numeroHabitacion: formValue.numeroHabitacion  || '',
      role            : formValue.role              || '',
      fechaCreacion   : formValue.fechaCreacion     || '',
      fechaLogeo      : formValue.fechaLogeo        || '',
    };
  }

  //Valida errores en la estructura del Formulario
  private getFormValidationErrors() {
    Object.keys(this.registerForm.controls).forEach(key => {
      const control = this.registerForm.get(key);
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

  //Funcion o Metodo para crear Usuarios
  crearUsuario(){
    
    this.formSubmitted =true;
    console.log(this.registerForm.value);
 
    if (this.registerForm.invalid) {
      console.log('Formulario no es correcto');
      this.getFormValidationErrors();
      return;
      
    } else {
      console.log('Posteando formulario');
    }

    //realizando el posteo
    this.usuarioServices.crearUsuario( this.sanitizeFormValue(this.registerForm.value) )
    .subscribe( resp =>{
      console.log('Usuario creado');
      console.log(resp);
      this.router.navigateByUrl('/');
    },(err) => {
      Swal.fire('Error', err.error.msg, 'error' );
    } );

  }
/*
  passwordsIguales(pass1:string, pass2:string){

    return( formGroup:FormGroup )=>{

      const pass1Control = formGroup.get(pass1);
      const pass2Control = formGroup.get(pass2);

      if(pass1Control?.value === pass2Control?.value){
        pass2Control?.setErrors(null)
      }else{
        pass2Control?.setErrors({ noEsIgual:true}) 
      }
    } 
  }

  contrasenaNoValidas(){

    const pass1 = this.registerForm.get('clave')?.value;
    const pass2 = this.registerForm.get('clave2')?.value;

    if( (pass1 !== pass2) && this.formSubmitted ){
      return true;
    }else{
      return false;
    }

  }
*/
  campoNoValido(campo: string):boolean{

      if(this.registerForm.get(campo)?.invalid && this.formSubmitted ){
        return true;
      }else{
        return false;
      }
      
  }

  aceptarTerminos(){

    return !this.registerForm.get('terminos')?.value && this.formSubmitted;

  }

}
