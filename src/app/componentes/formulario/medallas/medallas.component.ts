import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Eventos } from 'src/app/modelos/modelosTablas';
import { EventosService } from 'src/app/service/eventosService/eventos.service';
import { MedallasService } from 'src/app/service/medallasService/medallas.service';
import * as Toastify from 'toastify-js';

@Component({
  selector: 'app-medallas',
  templateUrl: './medallas.component.html',
  styleUrls: ['./medallas.component.css']
})

export class MedallasComponent implements OnInit {
  constructor(
    private medallaService: MedallasService,
    private eventosService: EventosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  medallaForm: FormGroup = new FormGroup({
    tipo_de_medalla : new FormControl(''),
    id_eventos : new FormControl(''),
   });
  medallaId?: number;

  eventos: Eventos[] = [];

  ngOnInit(): void {
    this.cargarDatosAlForm();
    this.cargarEventos();
  }
  guardarMedalla(): void {
    if (this.medallaId) {
      this.medallaService.actualizarMedalla(this.medallaId, this.medallaForm.value).subscribe(() => {
        this.mostrarMensage("Medalla actualizado con éxito");
        this.router.navigateByUrl('/inicio/lista_paises');
      });
    } else {
      this.medallaService.crearMedalla(this.medallaForm.value).subscribe(() => {
        this.mostrarMensage("Medalla agregada con éxito");
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
    this.medallaId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.medallaId) {
      this.medallaService.obtenerMedallaId(this.medallaId).subscribe(medalla => this.medallaForm.patchValue(medalla));
    }
  }
  obtenerId(){
    return this.medallaId = Number(this.route.snapshot.paramMap.get('id'));
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

