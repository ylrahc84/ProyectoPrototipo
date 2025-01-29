import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoriasService } from '../../../services/categorias.service';
import { Categorias } from '../../../modelos/categoria.models';
import { SubcategoriasService } from '../../../services/subcategorias.service';
import { SubCategorias, SubCategorias2 } from '../../../modelos/subcategoria.models';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { BusquedasService } from '../../../services/busquedas.service';

@Component({
  selector: 'app-sub-categoria-item',
  templateUrl: './sub-categoria-item.component.html',
  styles: ``
})
export class SubCategoriaItemComponent implements OnInit {

  public categorias:Categorias[] =[];
  public subCategoria:SubCategorias[]= [];
  public nuevoPost:string = "";

  public subcategoriaForm = this.fb.group({
    proceso:            ['1', Validators.required],     
    subCategoriaID:     ['0',Validators.required],
    categoriaID:        ['',Validators.required],
    subCategoriaNombre: ['',Validators.required],
    usuario:            ['MARIO',Validators.required]
  });

  constructor(private fb:FormBuilder,
    private categoriaServices:CategoriasService,
    private subCategoriaServices:SubcategoriasService,
    private buscarServices: BusquedasService,
    private activateRoute: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.cargarCategoria();

    this.activateRoute.params.subscribe( ({ID})=>{
      if(ID != "nuevo")
      {
        
        this.cargarSubCategoria(ID);
      }
      else{
        this.nuevoPost = ID;
      }
      
    } )

  }

  cargarSubCategoria(id:string){
    
    this.buscarServices.cargarSubCategoriaParametros('SubCategoria',id)
    .subscribe( (resp:SubCategorias[])=>{
      
      this.subCategoria = resp;
        // Transformamos la respuesta para que coincida con el FormBuilder
        const subCategoriaTransformada = resp.map(subCat => ({
          ...subCat,
          subCategoriaNombre: subCat.nombreSubCategoria // Cambiamos el nombre del atributo
        }));
  
        // Asignar el primer elemento del array al FormBuilder (o ajustar según la lógica que necesites)
        if (subCategoriaTransformada.length > 0) {
          this.subcategoriaForm.patchValue({
            subCategoriaID: subCategoriaTransformada[0].subCategoriaID,
            categoriaID: subCategoriaTransformada[0].categoriaID,
            subCategoriaNombre: subCategoriaTransformada[0].subCategoriaNombre,
            usuario: subCategoriaTransformada[0].usuario
          });
        }
 
    } )
  }

  cargarCategoria(){
    this.categoriaServices.cargarCategorias()
    .subscribe( (resp:Categorias[])=>
    {
      this.categorias = resp;
    } )
  }

  private sanitizeFormValue(formValue: any): SubCategorias2 {
    return {
      proceso               : formValue.proceso           || '',
      subCategoriaID        : formValue.subCategoriaID         || '',
      categoriaID           : formValue.categoriaID           || '',
      subCategoriaNombre    : formValue.subCategoriaNombre          || '',
      usuario               : formValue.usuario   || ''
    };
  }

  guardarSubCategoria(){


    if (this.subcategoriaForm.invalid) {
      
      console.log('Formulario no es correcto en SubCategoria');
      return;
      
    } else {
      console.log('Posteando formulario SubCategoria');
      
    }

    if(this.nuevoPost != "nuevo"){
      console.log("modifica");
      this.subCategoriaServices.actualizarSubCategoria(this.sanitizeFormValue(this.subcategoriaForm.value))
      .subscribe(resp=>{
      this.router.navigateByUrl('/dashboard/subcategorias')
      },(err)=>{

        console.log(err.error.msg);
      
        Swal.fire('Error', err.error.msg, 'error' );
      });
      
    }else{
      console.log("crear");
      this.subCategoriaServices.crearSubCategoria(this.sanitizeFormValue(this.subcategoriaForm.value))
      .subscribe(resp=>{
      this.router.navigateByUrl('/dashboard/subcategorias')
      },(err)=>{

        console.log(err.error.msg);
      
        Swal.fire('Error', err.error.msg, 'error' );
    });
    
    }

  }

}
