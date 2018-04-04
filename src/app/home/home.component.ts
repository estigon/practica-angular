import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';//import del servicio

@Component({

	selector: 'home',
	templateUrl: './home.component.html',
	providers: [RopaService] //se anade el servicio al componente en un providers para poderlo utilizar dentro del componente

})
export class HomeComponent{

	public titulo:string = 'Pagina principal';
	public listado_ropa:Array<string>;
	public prenda_a_guardar:string;
	public fecha;
	//para poder utilizar el servicio hay que crear una propiedad en la que se instancie un objeto de tipo RopaService para
	//poder utilizarlo
	constructor(
		private _ropaService: RopaService//con esta instancia de este objeto ya puedo acceder a sus metodos
	){

		this.fecha = new Date(2018, 2, 27);
	}

	ngOnInit(){
		console.log(this._ropaService.prueba());
		console.log(this._ropaService.prueba2('Camiseta adidas'));
		console.log(this._ropaService.nombre_prenda);

		this.listado_ropa = this._ropaService.getRopa();
		console.log(this.listado_ropa);
	}

	guardarPrenda(){
		if(this.prenda_a_guardar){
			this._ropaService.addRopa(this.prenda_a_guardar);
			this.prenda_a_guardar = null;
		}else{
			console.log('agregue informacion al campo para poder guardar');
		}
	}

	eliminarRopa(index:number){
		this._ropaService.deletePrenda(index);
	}

}