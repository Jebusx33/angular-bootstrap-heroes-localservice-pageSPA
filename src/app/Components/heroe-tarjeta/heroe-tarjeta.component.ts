import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router"; //click funcion

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit{
 @Input() heroe: any ={};
 @Input() index:any;
 @Output() heroeSeleccionado:EventEmitter<number>;
constructor(private _router:Router){
  this.heroeSeleccionado = new EventEmitter()
}
ngOnInit(){
}

//click funcion
verHeroe(){
this._router.navigate(['/heroe', this.index]);
 //this.heroeSeleccionado.emit(this.index)
}


}
