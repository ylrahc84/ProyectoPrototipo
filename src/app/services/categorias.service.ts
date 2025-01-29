import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from '../modelos/categoria.models';

//Constante donde tenemos la ruta de la API
const base_url = 'http://apihotelsoft.somee.com/api';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http:HttpClient) { }

  cargarCategorias(){

    const url = `${base_url}/Categorias`;
    //Hacemos uso de un tipo Generico <>, la respuesta será un array de objetos del tipo Usuario.
    //Este tipado ayuda a TypeScript a comprender qué tipo de datos se espera recibir, lo que permite que el IDE te ofrezca autocompletado y detección de errores en tiempo de compilación.
    return this.http.get<Categorias[]>(url)

  }

  crearCategoria(proceso:string, 
                 categoriaID:number, 
                 nombreCategoria:string, 
                 usuario:string){

    return this.http.post(`${ base_url }/Categorias`,{proceso, categoriaID, nombreCategoria, usuario});

  }

  actualizarCategoria(proceso:string, 
                      categoriaID:number, 
                      nombreCategoria:string, 
                      usuario:string){

    return this.http.patch(`${ base_url }/Categorias`,{proceso, categoriaID, nombreCategoria, usuario});

  }

  eliminarCategoria(categoria:Categorias ){
    return this.http.delete(`${ base_url }/Categorias/${categoria.categoriaID}`);
  }

  
}
