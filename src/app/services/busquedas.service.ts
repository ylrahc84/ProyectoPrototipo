import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario.models';
import { Categorias } from '../modelos/categoria.models';
import { map } from 'rxjs';
import { SubCategorias } from '../modelos/subcategoria.models';

//Constante donde tenemos la ruta de la API
const base_url = 'http://apihotelsoft.somee.com/api';
 

@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor( private http: HttpClient) { }

  cargarUsuariosParametros<T extends 'Usuario'>(tipo: T, termino:string ){

    const url = `${base_url}/${tipo}/${termino}`;
    //Hacemos uso de un tipo Generico <>, la respuesta será un array de objetos del tipo Usuario.
    //Este tipado ayuda a TypeScript a comprender qué tipo de datos se espera recibir, lo que permite que el IDE te ofrezca autocompletado y detección de errores en tiempo de compilación.
    return this.http.get<Usuario[]>(url);
  }

  cargarCategoriaParametros<T extends 'Categorias'>(tipo: T, termino:string ){

    const url = `${base_url}/${tipo}/${termino}`;
    //Hacemos uso de un tipo Generico <>, la respuesta será un array de objetos del tipo Usuario.
    //Este tipado ayuda a TypeScript a comprender qué tipo de datos se espera recibir, lo que permite que el IDE te ofrezca autocompletado y detección de errores en tiempo de compilación.
    return this.http.get<Categorias[]>(url);
  }

  cargarSubCategoriaParametros<T extends 'SubCategoria'>(tipo: T, termino:string ){

    const url = `${base_url}/${tipo}/${termino}`;
    //Hacemos uso de un tipo Generico <>, la respuesta será un array de objetos del tipo Usuario.
    //Este tipado ayuda a TypeScript a comprender qué tipo de datos se espera recibir, lo que permite que el IDE te ofrezca autocompletado y detección de errores en tiempo de compilación.
    return this.http.get<SubCategorias[]>(url);
  }

}
