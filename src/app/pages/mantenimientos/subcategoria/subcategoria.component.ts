import { Component, OnInit } from '@angular/core';
import { SubCategorias } from '../../../modelos/subcategoria.models';
import { SubcategoriasService } from '../../../services/subcategorias.service';
import { BusquedasService } from '../../../services/busquedas.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.component.html',
  styles: ``
})
export class SubcategoriaComponent implements OnInit {

  public subCategorias:SubCategorias[] = [];


  constructor(private subCategoriasservices:SubcategoriasService,
              private busqueda:BusquedasService,
              private fb:FormBuilder
   ) {
  }
  ngOnInit(): void {
    this.cargarSubCategorias();
  }

  cargarSubCategorias(){
    this.subCategoriasservices.cargarSubCategorias()
    .subscribe( (resp:SubCategorias[]) =>{
        this.subCategorias = resp;
    } )
  }

  buscar(termino:string){
    this.busqueda.cargarSubCategoriaParametros('SubCategoria',termino)
    .subscribe( (resp:SubCategorias[])=>{
      this.subCategorias = resp;
    });
  }

  borrarSubCategoria(subcategoria:SubCategorias){

    Swal.fire({
      title: "Borrar SubCategoria?",
      text: `Esta a punto de borrar! ${subcategoria.nombreSubCategoria}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar"
    }).then((result) => {
      if (result.isConfirmed) {

          this.subCategoriasservices.eliminarSubCategoria(subcategoria)
          .subscribe( resp=>{
             Swal.fire({
              title: "Eliminado!",
              text: "SubCategoria eliminado.",
              icon: "success"
            });
            this.cargarSubCategorias();
          } )
      }
    });
  }

}
