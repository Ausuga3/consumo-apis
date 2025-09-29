import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/landin-page/landin-page.component')
    },
    {
        path: 'api-nvl1',
        loadComponent: () => import('./pages/api-nvl1/api-nvl1.component')
    },
    {
        path: 'api-nvl2',
        loadComponent: () => import('./pages/apinvl2/api-nvl2')
    },
    {
        path: 'api-nvl3',
        loadComponent: () => import('./pages/api-nvl-3/api-nvl-3.component')
    },
    {
        path: '**',
       redirectTo: ''
    },
    
];
