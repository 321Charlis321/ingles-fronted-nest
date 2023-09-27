import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule

  ],
  exports: [

  ]
})
export class PagesModule { }
