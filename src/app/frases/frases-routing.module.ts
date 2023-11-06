import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { AddfraseComponent } from './pages/addfrase/addfrase.component';
import { GuessComponent } from './pages/guess/guess.component';
import { ListComponent } from './pages/list/list.component';
import { ModalupdateComponent } from './components/modalupdate/modalupdate.component';

const routes: Routes =
  [
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: 'frases', component: AddfraseComponent },
        { path: 'guess', component: GuessComponent },
        { path: 'edit/:_id', component: AddfraseComponent },
        { path: 'list', component: ListComponent },
        { path: 'modal', component: ModalupdateComponent },
        // { path: '**', redirectTo: 'frase' }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrasesRoutingModule { }
