import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './frases/components/components.module';



import { AppComponent } from './app.component';
import { LayoutComponent } from './frases/pages/layout/layout.component';
import { FrasesModule } from './frases/frases.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    FrasesModule,
    ComponentsModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
