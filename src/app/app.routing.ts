import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importamos los componentes que utilizaremos
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';


const appRoutes: Routes = [
	
	{path: 'pagina-principal', component: HomeComponent},
	{path: 'contacto', component: ContactoComponent},
	{path: 'contacto/:id', component: ContactoComponent},//recibir parametro por url
	{path: 'empleado', component: EmpleadoComponent},
	{path: 'fruta', component: FrutaComponent},
	{path: 'coches', component: CochesComponent},
	{path: 'plantillas', component: PlantillasComponent},
	{path: '**', component: HomeComponent}// ruta para cuando existe un error y no se consigue el componente '**'
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
