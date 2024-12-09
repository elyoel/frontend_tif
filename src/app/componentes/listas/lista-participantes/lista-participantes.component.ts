import { Component, OnInit } from '@angular/core';
import { ParticipantesService } from 'src/app/service/participantesService/participantes.service';
import { Participantes } from 'src/app/modelos/modelosTablas';

@Component({
  selector: 'app-lista-participantes',
  templateUrl: './lista-participantes.component.html',
  styleUrls: ['./lista-participantes.component.css']
})
export class ListaParticipantesComponent implements OnInit{
  participantes: Participantes[] = [];

  constructor(
    private participantesService: ParticipantesService
  ){ }

  ngOnInit(): void{
    this.cargarParticipantes();
  }

  private cargarParticipantes(): void{
    this.participantesService.obtenerParticipantes().subscribe(participantes =>{
      this.participantes = participantes;
    })
  }
}

