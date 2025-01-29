import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { Usuario } from '../../../modelos/usuario.models';
import { map } from 'rxjs';
import { BusquedasService } from '../../../services/busquedas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: ``
})
export class UsuariosComponent implements OnInit {

  public usuarios:Usuario[] = [];

  constructor(private usuarioServices: UsuariosService,
            private busquedaServices:BusquedasService
   ) {
    
  }

  ngOnInit(): void {

    this.cargarUsuario();

  }

  cargarUsuario(){
    this.usuarioServices.cargarUsuarios()
    .subscribe( (resp: Usuario[]) =>{

      this.usuarios = resp;
      
    } )
  }
  //Sin Usar Formualrio reactivos
  buscar(termino:string){

    this.busquedaServices.cargarUsuariosParametros('Usuario', termino)
    .subscribe ( (resp:Usuario[])=>{

      console.log(termino);

      this.usuarios = resp;
    } )

  }

  eliminarUsuario(usuario:Usuario){

    Swal.fire({
      title: "Borrar Usuario?",
      text: `Esta a punto de borrar! ${usuario.nombreUsuario}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar"
    }).then((result) => {
      if (result.isConfirmed) {

          this.usuarioServices.eliminarUsuario(usuario)
          .subscribe( resp=>{
             Swal.fire({
              title: "Eliminado!",
              text: "Usuario eliminado.",
              icon: "success"
            });
            this.cargarUsuario();
          } )

      }
    });


  }
}
