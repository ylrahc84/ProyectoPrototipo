import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
 
  private linkTheme = document.querySelector('#theme');
  

  constructor() {

    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href', url);
   }

   changeTheme(theme:string){

    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);

    //Grabando en Memoria 
    localStorage.setItem('theme', url);     
    
  }

  
  checkCurrentThem(){
    
    const links = document.querySelectorAll('.selector');

    links.forEach(elemento=>{
      
      elemento.classList.remove('working');

      const btnTheme = elemento.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`
      const currentTheme = this.linkTheme?.getAttribute('href');

      if(btnThemeUrl === currentTheme){
        elemento.classList.add('working');
      }
    })
  }

}
