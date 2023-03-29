import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../Servicios/heroes.services';//servicios
import { Router } from "@angular/router"; //click funcion

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

//servicios
export class HeroesComponent implements OnInit {
heroesDatos:Heroe[]=[];

constructor( private _heroesService: HeroesService, private _router:Router){
   this.heroesDatos;
}
ngOnInit(){
  this.heroesDatos = this._heroesService.getHeroes();
  console.log(this.heroesDatos)
}

//click funcion
verHeroe(index:number){
  this._router.navigate(['/heroe',index]);
}

}

