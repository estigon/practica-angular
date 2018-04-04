import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'; //para peticiones http
import 'rxjs/add/operator/map'; //libreria para mapear la respuesta
import { Observable } from 'rxjs/Observable';//nos permite usar el objeto rxjs



@Injectable()
export class PeticionesServices{
	public url: string;

	constructor(private _http: Http){
		this.url = "https://jsonplaceholder.typicode.com/posts";//url para peticiones post
	}

	getPrueba(){
		return 'Hola mundo desde PeticionesServices';
	}

	getArticulos(){
		console.log('estoy en getArticulos()');
		return this._http.get(this.url)
						 .map( res => res.json()); //con map capturamos la respuesta y la convertimos a objeto json utilizable por javascript
	}
}