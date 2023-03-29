import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//servicios
import { HeroesService } from './Servicios/heroes.services';

//rutas
import { AppRoutingModule } from './app-routing.module';



//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HomeComponent } from './Components/home/home.component';
import { HeroeComponent } from './Components/heroe/heroe.component';
import { HeroeBuscadoComponent } from './Components/heroe-buscado/heroe-buscado.component';
import { HeroeTarjetaComponent } from './Components/heroe-tarjeta/heroe-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HeroesComponent,
    HomeComponent,
    HeroeComponent,
    HeroeBuscadoComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeroesService //servicios
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
