import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesServices } from '../services/peticiones.service';

@Component({
	selector: 'coches',
	templateUrl: './coches.component.html',
	providers: [PeticionesServices]

})
export class CochesComponent{

	public coche: Coche;
	public arreglo_de_autos: Array<Coche>;
	public articulos;

	constructor(
		private _peticionesServices: PeticionesServices
	){
		this.coche = new Coche("","","");
		this.arreglo_de_autos = [
			new Coche("Renault Clio","Azul","2009"),
			new Coche("Fiat Palio","negro","2004")
		];
	}

	ngOnInit(){									//las peticiones se hacen al llamar metodo subscribe(), antes de ser llamado
		this._peticionesServices.getArticulos().subscribe(//no existe peticion
						//recibe la respuesta
				result => {
					this.articulos = result;
					if(!this.articulos){
						console.log('Error en el servidor')
					}
				},
						//recibe el error
				error => {
					var errorMessage = <any>error;
					console.log(errorMessage);
				}		
			);
	}

	onSubmit(){
		console.log(this.coche);
		this.arreglo_de_autos.push(this.coche); //lo que introduzca en los campos del objeto coche se agregara a arreglo_de_autos
		this.coche = new Coche("","",""); //para borrar los campos despues de agregar al listado
	}
}