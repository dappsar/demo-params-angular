import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})

export class HijoComponent implements OnInit {

  @Input() nombreHijo: string = 'sin nombre'
  @Output() cambioNombreHijo = new EventEmitter<string>()

  // constructor( private DataService: DataService) { }

  ngOnInit(): void {
  }


  cambiarNombre() {
    this.nombreHijo='pepito'
    this.cambioNombreHijo.emit(this.nombreHijo)
    // this.DataService.nombreUsuario = this.nombreHijo
  }

}
