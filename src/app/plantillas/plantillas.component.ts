import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {

	public title:string;
	public administrador;

  constructor() {

  	this.title = 'plantillas ngTemplate angular';
  	this.administrador = true;
  }

  ngOnInit() {
  }
  
  cambiar(value){
  	this.administrador = value;
  }

}
