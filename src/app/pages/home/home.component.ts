import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  nombre: string = 'Nombre Usuario'

  constructor( private DataService: DataService ) { }

  ngOnInit(): void {
  }

  cambiarNombre() {
    this.nombre = 'Pepe Biondi'
    this.DataService.nombreUsuario = this.nombre
  }

  hijoCambioNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre
    this.DataService.nombreUsuario = nuevoNombre
  }

}
