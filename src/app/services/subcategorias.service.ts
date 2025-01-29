import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCategorias, SubCategorias2 } from '../modelos/subcategoria.models';


//Constante donde tenemos la ruta de la API
const base_url = 'http://apihotelsoft.somee.com/api';


@Injectable({
  providedIn: 'root'
})
export class SubcategoriasService {

  constructor( private http:HttpClient ) { }

  cargarSubCategorias(){

    const url = `${base_url}/SubCategoria`;
    //Hacemos uso de un tipo Generico <>, la respuesta será un array de objetos del tipo Usuario.
    //Este tipado ayuda a TypeScript a comprender qué tipo de datos se espera recibir, lo que permite que el IDE te ofrezca autocompletado y detección de errores en tiempo de compilación.
    return this.http.get<SubCategorias[]>(url)

  }

  

  crearSubCategoria(subcategoria:SubCategorias2){

    return this.http.post(`${ base_url }/SubCategoria`, subcategoria);

  }

  actualizarSubCategoria(subcategoria:SubCategorias2){
    return this.http.patch(`${ base_url }/SubCategoria`, subcategoria);
  }

  eliminarSubCategoria(subcategoria:SubCategorias){
    return this.http.delete(`${ base_url }/SubCategoria/${subcategoria.subCategoriaID}`);
  }

}
