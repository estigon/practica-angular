import { Component } from '@angular/core';

@Component({

	selector: 'home',
	templateUrl: './home.component.html'

})
export class HomeComponent{

	public titulo:string;

	constructor(){
		this.titulo = 'Pagina principal';
	}

}