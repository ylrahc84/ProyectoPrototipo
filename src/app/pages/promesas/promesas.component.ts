import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: ``
})
export class PromesasComponent implements OnInit {


  ngOnInit(): void {

    this.getUsuario().then( (usuarios)=>{
      console.log(usuarios);
    } );

    /*
    const promesas = new Promise( (resolve, reject)=>{

      if(false){
        resolve('Hola Mundo');
      } else{
        reject('Algo salio mal');
      }

    } );
     
    promesas
    .then((mensaje )=>{
      console.log(mensaje);
    })
    .catch(
      error=> console.log('Error en mi promesa', error)
    );

    console.log('Fin de Init')
    */
  }

  getUsuario(){

    const promesa = new Promise( (resolve)=>{
      fetch('https://reqres.in/api/users?page=2')
      .then( resp => resp.json() )
      .then( body => resolve( body.data ) );
    });

    return promesa;
  }
 
}
