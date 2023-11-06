import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FrasesRoutingModule } from './frases-routing.module';

import { ListComponent } from './pages/list/list.component';
import { AddfraseComponent } from './pages/addfrase/addfrase.component';
import { GuessComponent } from './pages/guess/guess.component';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    GuessComponent,
    ListComponent,
    AddfraseComponent,
  ],
  imports: [
    CommonModule,
    FrasesRoutingModule,
    ReactiveFormsModule,
    ComponentsModule

  ]
})
export class FrasesModule { }
