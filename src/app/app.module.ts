import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import {HttpClientModule} from '@angular/common/http';//para poder hacer peticiones http es necesario hacer estos imports
import {HttpModule} from '@angular/http';

/*importamos los componenetes a registrar en el ngModule*/
import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { AnimeComponent } from './anime/anime.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    AnimeComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule, 
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
