import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ListaPaisesComponent } from './componentes/listas/lista-paises/lista-paises.component';
import { ListaParticipantesComponent } from './componentes/listas/lista-participantes/lista-participantes.component';
import { PaisesComponent } from './componentes/formulario/paises/paises.component';
import { DisciplinasComponent } from './componentes/formulario/disciplinas/disciplinas.component';
import { EventosComponent } from './componentes/formulario/eventos/eventos.component';
import { ParticipantesComponent } from './componentes/formulario/participantes/participantes.component';
import { MedallasComponent } from './componentes/formulario/medallas/medallas.component';

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio/lista_paises', component: ListaPaisesComponent},
  {path: 'inicio/lista_participantes', component: ListaParticipantesComponent},
  
  {path: 'nuevo/pais', component: PaisesComponent},
  {path: 'editar/pais/:id', component: PaisesComponent},

  {path: 'nuevo/disciplina', component: DisciplinasComponent},
  {path: 'editar/disciplina/:id', component: DisciplinasComponent},

  {path: 'nuevo/evento', component: EventosComponent},
  {path: 'editar/evento/:id', component: EventosComponent},
  
  {path: 'nuevo/participante', component: ParticipantesComponent},
  {path: 'editar/participante/:id', component: ParticipantesComponent},
  
  {path: 'nuevo/medalla', component: MedallasComponent},
  {path: 'editar/medalla/:id', component: MedallasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
