import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import {HomeComponent} from './Components/home/home.component';
import {HeroesComponent} from './Components/heroes/heroes.component';
import {HeroeBuscadoComponent} from './Components/heroe-buscado/heroe-buscado.component';
import { AboutComponent } from './Components/about/about.component';
import { HeroeComponent } from "./Components/heroe/heroe.component";

const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'heroes', component:HeroesComponent },
  {path:'heroe-buscado/:terminoBuscar', component:HeroeBuscadoComponent },
  {path:'about', component:AboutComponent},
  {path:'heroe/:id', component:HeroeComponent },
  {path:'**', component:HomeComponent } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
