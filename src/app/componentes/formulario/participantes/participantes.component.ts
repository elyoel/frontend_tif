import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Disciplinas, Eventos, Pais } from 'src/app/modelos/modelosTablas';
import { DisciplinasService } from 'src/app/service/disciplinasService/disciplinas.service';
import { EventosService } from 'src/app/service/eventosService/eventos.service';
import { MedallasService } from 'src/app/service/medallasService/medallas.service';
import { PaisService } from 'src/app/service/paisService/pais.service';
import { ParticipantesService } from 'src/app/service/participantesService/participantes.service';
import * as Toastify from 'toastify-js';


@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit{
  constructor(
    private participanteService: ParticipantesService,
    private eventoService: EventosService,
    private disciplinaService: DisciplinasService,
    private paisService: PaisService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  participanteForm: FormGroup = new FormGroup({
    nombre : new FormControl(''),
    apellido : new FormControl(''),
    edad : new FormControl(''),
    id_eventos : new FormControl(''),
    id_pais : new FormControl(''),
    id_medallas : new FormControl(''),
    id_disciplinas : new FormControl(''),
  });
  participanteId?: number;

  eventos: Eventos[]= [];
  paises: Pais[]= [];
  disciplinas: Disciplinas[]= [];

 ngOnInit(): void {
   this.cargarDisciplinas();
   this.cargarEventos();
   this.cargarPaises();
   this.cargarDatosAlForm();
 }
  private cargarDatosAlForm(): void {
    this.participanteId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.participanteId) {
      this.participanteService.obtenerParticipanteId(this.participanteId).subscribe(data => this.participanteForm.patchValue(data));
   }
  }
  guardarParticipante(): void {
    if (this.participanteId) {
      this.participanteService.actualizarParticipante(this.participanteId, this.participanteForm.value).subscribe(() => {
        this.mostrarMensage("Medalla actualizado con éxito");
        this.router.navigateByUrl('/inicio/lista_paises');
      });
    } else {
      this.participanteService.crearParticipante(this.participanteForm.value).subscribe(() => {
        this.mostrarMensage("Medalla agregada con éxito");
        this.router.navigateByUrl('/inicio/lista_paises');
      });
    }
  }

  private cargarEventos(): void{
    this.eventoService.obtenerEventos().subscribe(evento =>{
      this.eventos = evento;
    })
  }
  private cargarPaises(): void{
    this.paisService.obtenerPaises().subscribe(pais =>{
      this.paises = pais;
    })
  }
  private cargarDisciplinas(): void{
    this.disciplinaService.obtenerDisciplinas().subscribe(disciplinas =>{
      this.disciplinas = disciplinas;
    })
  }



  
  
  
  private mostrarMensage(message: string): void {
    Toastify({
      text: message,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true, 
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  }
}
