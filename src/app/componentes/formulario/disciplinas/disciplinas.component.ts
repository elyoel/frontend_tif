import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Disciplinas, Eventos } from 'src/app/modelos/modelosTablas';
import { DisciplinasService } from 'src/app/service/disciplinasService/disciplinas.service';
import { EventosService } from 'src/app/service/eventosService/eventos.service';
import * as Toastify from 'toastify-js';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit{
  constructor(
    private disciplinasService: DisciplinasService,
    private eventosService: EventosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  disciplinasForm: FormGroup = new FormGroup({
    id_eventos : new FormControl(''),
    nombre_disciplinas : new FormControl(''),
    tipo_de_disciplinas : new FormControl('')
  });
  disciplinaId?: number;

  eventos: Eventos[] = [];
  disciplinas: Disciplinas[]= [

  ]
  ngOnInit(): void {
    this.cargarDatosAlForm();
    this.cargarEventos();
  }
  guardarDisciplina(): void {
    if (this.disciplinaId) {
      this.disciplinasService.actualizarDisciplina(this.disciplinaId, this.disciplinasForm.value).subscribe(() => {
        this.mostrarMensage("Disciplina actualizado con éxito");
        this.router.navigateByUrl('/inicio/lista_paises');
      });
    } else {
      this.disciplinasService.crearDisciplina(this.disciplinasForm.value).subscribe(() => {
        this.mostrarMensage("Disciplina agregada con éxito");
        this.router.navigateByUrl('/inicio/lista_paises');
      });
    }
  }
  private cargarEventos(): void{
    this.eventosService.obtenerEventos().subscribe(evento =>{
      this.eventos = evento;
    })
  }
  private cargarDatosAlForm(): void {
    this.disciplinaId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.disciplinaId) {
      this.disciplinasService.obtenerDisciplinaId(this.disciplinaId).subscribe(disciplina => this.disciplinasForm.patchValue(disciplina));
    }
  }
  obtenerId(){
    return this.disciplinaId = Number(this.route.snapshot.paramMap.get('id'));
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
