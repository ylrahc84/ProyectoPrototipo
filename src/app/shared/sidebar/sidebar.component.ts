import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  
  menuItems!: any[];
  
  constructor( private sidebarService:SidebarService,
    private usuarioServices: UsuariosService,
    private router: Router
   ) {
    
    this.menuItems = sidebarService.menu;
    
  }

  logOut(){
    this.usuarioServices.logout();
    this.router.navigateByUrl('/login');
  }

}