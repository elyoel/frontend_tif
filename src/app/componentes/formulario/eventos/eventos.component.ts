import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as Toastify from 'toastify-js';
import { EventosService } from 'src/app/service/eventosService/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit{
  constructor(
    private eventosService: EventosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  eventosForm: FormGroup = new FormGroup({
    nombre_evento : new FormControl(''),
    fecha_del_evento : new FormControl(''),
   });
  eventosId?: number;
  ngOnInit(): void {
    this.cargarDatosAlForm();
    this.eventosService.obtenerEventoId(this.obtenerId()).subscribe(data =>{
      console.log(data);
    })
  }

  guardarEvento(): void {
    if (this.eventosId) {
      this.eventosService.actualizarEvento(this.eventosId, this.eventosForm.value).subscribe(() => {
        this.mostrarMensage("Evento actualizado con éxito");
        this.router.navigateByUrl('/inicio/lista_paises');
      });
    } else {
      this.eventosService.crearEvento(this.eventosForm.value).subscribe(() => {
        this.mostrarMensage("Evento agregada con éxito");
        this.router.navigateByUrl('/inicio/lista_paises');
      });
    }
  }
  private cargarDatosAlForm(): void {
    this.eventosId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.eventosId) {
      this.eventosService.obtenerEventoId(this.eventosId).subscribe(eventos => this.eventosForm.patchValue(eventos));
    }
  }
  obtenerId(){
    return this.eventosId = Number(this.route.snapshot.paramMap.get('id'));
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
