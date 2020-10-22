import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovesComponent } from './componentes/pages/moves/moves.component';
import { ListadoComponent } from './componentes/pages/listado/listado.component';
import { DetalleComponent } from './componentes/pages/detalle/detalle.component';
import { NotFoundComponent } from './componentes/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component: ListadoComponent
  },
  {
    path:'moves/:pokemon',
    component: MovesComponent
  },
  {
    path:'listado',
    component: ListadoComponent
  },
  {
    path:'detalle/:pokemon',
    component: DetalleComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
