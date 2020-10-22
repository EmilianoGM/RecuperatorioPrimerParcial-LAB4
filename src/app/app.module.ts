import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListadoComponent } from './componentes/pages/listado/listado.component';
import { DetalleComponent } from './componentes/pages/detalle/detalle.component';
import { NotFoundComponent } from './componentes/pages/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovesComponent } from './componentes/pages/moves/moves.component';
import { ListaPokemonesComponent } from './componentes/lista-pokemones/lista-pokemones.component';
import { DetallePokemonComponent } from './componentes/detalle-pokemon/detalle-pokemon.component';
import { MovimientoPokemonComponent } from './componentes/movimiento-pokemon/movimiento-pokemon.component';
@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent,
    NotFoundComponent,
    MovesComponent,
    ListaPokemonesComponent,
    DetallePokemonComponent,
    MovimientoPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
