import { Component } from '@angular/core'; 

@Component({
	selector: 'fruta',
	templateUrl: './fruta.component.html',

}) /*esto es un decorador, no se cierra con ";". Le aporta funcionalidad a una clase*/
export class FrutaComponent{
	/*propiedades*/
	public nombre_componete;
	public listado_frutas;
	public nombre:string;
	public edad:number;
	public trabajos:Array<string>;
	public oficios:Array<any> ;
	comodin:any;/*tambien puedes declarar una propiedad sin definir el tipo de acceso*/

	/*constructor*/
	constructor(){
		this.nombre_componete = 'Componente de fruta';
		this.listado_frutas = 'Naranja, Manzana, Pera y Sandia';
		this.nombre = 'Elys Gonzalez';
		this.edad = 26;
		this.trabajos = ['mecanico','youtuber','programador'];
		this.oficios = ['mecanico',3500,'programador'];
		this.comodin = 'cualquier cosa puede contener una variable de tipo any';
	}

	/*primer metodo que es llamado luego del constructor*/
	ngOnInit(){
		/*llamado de una funcion*/
		this.saludo(this.nombre);
		this.cambiarNombre();

		/*variables y alcance*/
		var uno = 40;/*las variables var tienen alcance global*/
		var dos = 100;

		if(uno === 40){//principio del bloque
			
			/*el valor de las variables let solo existe  dentro del bloque donde son declaradas*/
			let tres = 3;
			let dos = 2;
			console.log('dentro del if ' + uno +' ' + dos);
		}//final del bloque

		console.log('afuera del if ' + uno +' ' + dos);
		/*console.log('llamar variable let luego de su bloque de declaracion' + tres);*/ //error no se encuentra nombre tres
	}

	/*creacion de una funcion*/
	saludo(usuario){
		alert('Bienvenido ' + usuario);
	}

	cambiarNombre(){
		this.nombre = 'Juan Lopez';
	}
}