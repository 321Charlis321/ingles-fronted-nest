import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/pages/error404/error404.component';

const routes: Routes =
  [
    {
      path: '',
      loadChildren: () => import('./frases/frases.module').then(m => m.FrasesModule),
    },
    {
      path: '404',
      component: Error404Component
    },
    {
      path: '',
      redirectTo: 'frases',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '404'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
