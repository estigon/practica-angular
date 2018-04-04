import {Injectable} from '@angular/core';

@Injectable()
export class RopaService{
	public nombre_prenda = 'Pantalones vaqueros';
	public coleccion_ropa = ['Camiseta','pantalon'];

	prueba(){
		return this.nombre_prenda;
	}
	prueba2(nombre_prenda){
		return nombre_prenda;
	}

	addRopa(nombre_prenda:string):Array<string>{
		this.coleccion_ropa.push(nombre_prenda);

		return this.getRopa();
	}

	getRopa(){
		return this.coleccion_ropa;
	}

	deletePrenda(index:number){
		this.coleccion_ropa.splice(index, 1);/*el segundo elemento representa la cantidad de valores a borrar a partir del indice
		en el que nos encontremos, en este caso el indice mismo solamente*/
		return this.getRopa();
	}

}