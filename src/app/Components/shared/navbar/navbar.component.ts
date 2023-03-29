import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"; //click funcion


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

constructor( private router:Router){

}
ngOnInit() {
}

buscarHeroe( terminoBuscar:String){
console.log(terminoBuscar)
this.router.navigate(['/heroe-buscado', terminoBuscar]);
}

}


