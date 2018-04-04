import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversor'})

export class ConversorPipe implements PipeTransform{
	transform(valor, por){
		let value_one = parseInt(valor);
		let value_two = parseInt(por);

		let result = "el resultado de "+value_one+" x "+value_two+" es igual a "+(value_one * value_two);
		return result;
	}
}
//despues de crear un pipe tenemos que importarlo en el app.module.ts