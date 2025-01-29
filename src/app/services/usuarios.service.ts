import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interfaces';
import { loginForm } from '../interfaces/login-form.interfaces';
import { tap } from 'rxjs';
import { Usuario } from '../modelos/usuario.models';

//Constante donde tenemos la ruta de la API
const base_url = 'http://ylrahcapi.somee.com/api';
 
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //
  private loggedIn = false; // Esto debe ser reemplazado por la lógica real de autenticación

  //HttpClient= Hacemos la inyeccion del servicio, se utiliza para hacer solicitudes HTTP a servidores remotos.
  constructor( private http: HttpClient ) { }

  //Funcion para usarlo en el => GUARD
  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  //Funcion para Crear nuevos Usuarios
  //RegisterForm = Es una interface
  crearUsuario( formData: RegisterForm ){

    return this.http.post(`${ base_url }/Usuario`, formData)
    .pipe(
      tap( (resp: any)=>{

        if (resp && resp.token) {
          localStorage.setItem('token', resp.token);
          this.loggedIn = true;
        }
        
      })
    )
  }

  //Funcion para realizar el Login y autenticacion de Usuario
  //loginForm = Es una interface
  login(formData: loginForm ){

    return this.http.post(`${ base_url }/Usuario/login`, formData)
    .pipe(
      tap( (resp: any)=>{
        if (resp && resp.token) {
          localStorage.setItem('token', resp.token);
          this.loggedIn = true;
        }
      })
    )
  }

  //Funcion para salir o cerras sesion de Usuario
  logout(){
    localStorage.removeItem('token');
  }

  //Funcion para cargar toda la lista de Usuarios
  //Usuario = Es un Modelo de Usuarios
  cargarUsuarios(){
    const url = `${base_url}/Usuario`;
    //Hacemos uso de un tipo Generico <>, la respuesta será un array de objetos del tipo Usuario.
    //Este tipado ayuda a TypeScript a comprender qué tipo de datos se espera recibir, lo que permite que el IDE te ofrezca autocompletado y detección de errores en tiempo de compilación.
    return this.http.get<Usuario[]>(url)
  }

  eliminarUsuario(usuario:Usuario){

    return this.http.delete(`${ base_url }/Usuario/${usuario.usuarioID}`);

  }

}
 