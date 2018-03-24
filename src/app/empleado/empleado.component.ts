import { Component } from '@angular/core';
import { Empleado } from './empleado';//importamos la clase Empleado

@Component({

	selector: 'empleado-tag',
	templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{

	//propiedades
	public titulo = 'Titulo del componente empleado';
		// nombre_variable:tipo_de_variable
	public empleado:Empleado; //declaramos un objeto de tipo Empleado
	public trabajadores:Array<Empleado>;
	public trabajador_externo:boolean;
	public mostrartrabajadores:boolean;
	public color:string;
	public color_seleccionado:string;

	constructor(){
		this.empleado = new Empleado('David Lopez', 30, 'cocinero', true);
		this.trabajadores = [
			new Empleado('luis Lopez', 26, 'ayudante cocinero', false),
			new Empleado('antonio Lopez', 36, 'chef', true),
			new Empleado('andreina', 19, 'cajera', true),
			new Empleado('luisana', 22, 'mesera', true)
		];
		this.trabajador_externo = false;
		this.mostrartrabajadores = false;
		this.color = "blue";
		this.color_seleccionado = "#ccc";
	}
	
	ngOnInit(){//este es el primer metodo llamado despues del constructor de la clase
		
		console.log(this.empleado);
		console.log(this.trabajadores);
	}

	cambiarExterno(valor){
		this.trabajador_externo = valor;
	}
	seMuestranTrabajadores(eleccion){
		this.mostrartrabajadores = eleccion;
	}
	logColorSeleccionado(){
		console.log(this.color_seleccionado);
	}
} 