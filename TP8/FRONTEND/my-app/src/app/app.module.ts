import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/Header.component';
import { HomeView } from './components/HomeView/HomeView.component';
import { Grilla } from './components/Grilla/Grilla.component';
import { HttpClientModule } from '@angular/common/http';
import { Formulario } from './components/Formulario/Formulario.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeView,Grilla,Formulario],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
