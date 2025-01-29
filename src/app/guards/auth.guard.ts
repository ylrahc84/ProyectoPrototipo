import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(UsuariosService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    console.log('No está autenticado. Redirigiendo a /login');
    router.navigate(['/login']);
    return false;
  }
 
};

