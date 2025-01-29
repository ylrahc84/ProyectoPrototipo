import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { CategoriasService } from '../../../services/categorias.service';
import { Categorias } from '../../../modelos/categoria.models';
import { BusquedasService } from '../../../services/busquedas.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styles: ``
})
export class CategoriasComponent implements OnInit {
 
  public categorias:Categorias[] =[];

  constructor(private categoriaServices: CategoriasService,
            private busquedaServices: BusquedasService
   ) {}

  ngOnInit(): void {
    this.cargarCategoria();
  }
 
  cargarCategoria(){
    this.categoriaServices.cargarCategorias()
    .subscribe( (resp: Categorias[]) =>{
      this.categorias = resp;
    })
  }

  //Sin Usar Formualrio reactivos
  buscar(termino:string){

    this.busquedaServices.cargarCategoriaParametros('Categorias', termino)
    .subscribe ( (resp:Categorias[]) =>{
 
      this.categorias = resp;

    } )

  }
  
  async abrirModal(){
    const { value } = await Swal.fire<string>({
      title:"Crear Categoria",
      text:"Ingrese el Nombre de Categoria",
      input: "text",
      inputLabel: "Categorias",
      inputPlaceholder: "Nombre de la Categoria",
      showCancelButton:true,
    });
    if (value && value.trim().length > 0) {
      this.categoriaServices.crearCategoria("1", 0, value, "Mario")
      .subscribe(resp=>{
        this.cargarCategoria();
      })
    }
  }

  guardarCambios(categoria:Categorias ){

    this.categoriaServices.actualizarCategoria("2", categoria.categoriaID, categoria.nombreCategoria, categoria.usuario)
    .subscribe( resp=>{
      Swal.fire({
        title: "Actualizado!",
        text: categoria.nombreCategoria,
        icon: "success"
      });
    } )

  }

  eliminarCategoria(categoria:Categorias){
    
    Swal.fire({
      title: "Borrar Categoria?",
      text: `Esta a punto de borrar! ${categoria.nombreCategoria}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar"
    }).then((result) => {
      if (result.isConfirmed) {

          this.categoriaServices.eliminarCategoria(categoria)
          .subscribe( resp=>{
             Swal.fire({
              title: "Eliminado!",
              text: "Categoria eliminado.",
              icon: "success"
            });
            this.cargarCategoria();
          } )
      }
    });
  }

}
