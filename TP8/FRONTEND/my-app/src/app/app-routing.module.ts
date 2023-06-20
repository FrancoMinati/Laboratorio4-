import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeView } from './components/HomeView/HomeView.component';
import { Grilla } from './components/Grilla/Grilla.component';
import { Formulario } from './components/Formulario/Formulario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeView,
  },
  {
    path: 'InstrumentosABM',
    component: Grilla,
  },
  
  {
    path: 'instrumentos/formulario/:id',
    component: Formulario,
  },
  {
    path: 'instrumentos/formulario/nuevoo',
    component: Formulario,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
