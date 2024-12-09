import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PaisesComponent } from './componentes/formulario/paises/paises.component';
import { ParticipantesComponent } from './componentes/formulario/participantes/participantes.component';
import { DisciplinasComponent } from './componentes/formulario/disciplinas/disciplinas.component';
import { EventosComponent } from './componentes/formulario/eventos/eventos.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ListaPaisesComponent } from './componentes/listas/lista-paises/lista-paises.component';
import { ListaParticipantesComponent } from './componentes/listas/lista-participantes/lista-participantes.component';
import { MedallasComponent } from './componentes/formulario/medallas/medallas.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent,
    MedallasComponent,
    ParticipantesComponent,
    DisciplinasComponent,
    EventosComponent,
    HomeComponent,
    FooterComponent,
    ListaPaisesComponent,
    ListaParticipantesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
