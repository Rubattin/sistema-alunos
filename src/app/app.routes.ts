import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./formulario/formulario.component').then(m => m.FormularioComponent)
  },
  {
    path: 'info',
    loadComponent: () => import('./info-projeto/info-projeto.component').then(m => m.InfoProjetoComponent)
  }
];
