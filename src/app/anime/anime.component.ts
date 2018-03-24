import { Component } from '@angular/core';

@Component({
	selector: 'anime',
	templateUrl: './anime.component.html',
	styleUrls: ['./anime.component.css']
})

export class AnimeComponent{
/*propiedas*/
	public nombre_componente = 'Componente de anime';
	public lista_anime = 'DBZ, Naruto, Samurai x';
	/*private saludo = 'soy privada'; este tipo de propiedad se muestra de igual forma porque al compilar
	 todo se transforma a javascript*/

}