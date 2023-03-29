import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router"; //click funcion
import { HeroesService } from '../../Servicios/heroes.services';
import { Router } from "@angular/router"; //click funcion

@Component({
  selector: 'app-heroe-buscado',
  templateUrl: './heroe-buscado.component.html',
  styles: [
  ]
})
export class HeroeBuscadoComponent implements OnInit {
  @Input() heroe: any ={};
  @Input() index:any;
  heroesDatos: any[] = [];
  terminoBuscar: any;
  constructor(private ActivatedRoute: ActivatedRoute,
    private _heroeService: HeroesService, private _router: Router) {
    this.terminoBuscar;
  }


  ngOnInit() {
    this.ActivatedRoute.params.subscribe(params => {
      this.terminoBuscar = params['terminoBuscar']
      this.heroesDatos = this._heroeService.buscarHeroes(params['terminoBuscar']);
    });
  }

  //click funcion
  verHeroe() {
    this._router.navigate(['/heroe', this.index]);
  }

}
