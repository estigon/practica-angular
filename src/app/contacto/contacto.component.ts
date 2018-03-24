import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';//para recibir los parametros ingresados por url

@Component({

	selector: 'contacto',
	templateUrl: './contacto.component.html'

})

export class ContactoComponent{

	public titulo:string = 'Pagina de contacto de la web';
	public parametro;

	constructor(
		private _router: Router,
		private _route: ActivatedRoute
	){}

	ngOnInit(){/*el forEach recibe una funcion de tipo flecha, se usa  de este tipo para que pueda acceder a valores*/
		this._route.params.forEach((params: Params) =>{//fuera de su ambito, como lo es parametro
			this.parametro = params['id'];
		});
	}
	redirigir(){
		this._router.navigate(['./pagina-principal']);
	}//puede recibir dos parametros ['./ruta a la que quiero que vaya','parametro de esa ruta']
}/*this._router.navigate(['./pagina-principal', 'categorias']); y me llevaria a
localhost:4200/pagina-principal/categorias */