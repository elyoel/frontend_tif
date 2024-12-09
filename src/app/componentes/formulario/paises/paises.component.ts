import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as Toastify from 'toastify-js';
import { PaisService } from 'src/app/service/paisService/pais.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit{
  constructor(
    private paisService: PaisService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  paisForm: FormGroup = new FormGroup({
    nombre_de_pais : new FormControl(''),
    region : new FormControl('')
   });
  paisId?: number;
  
  ngOnInit(): void {
    this.cargarDatosAlForm();
    this.paisService.obtenerPaisId(this.obtenerId()).subscribe(data =>{
      console.log(data);
    })
  }

  guardarPais(): void {
    if (this.paisId) {
      this.paisService.actualizarPais(this.paisId, this.paisForm.value).subscribe(() => {
        this.mostrarMensage("Pais actualizado con éxito");
        this.router.navigateByUrl('/inicio/lista_paises');
      });
    } else {
      this.paisService.crearPais(this.paisForm.value).subscribe(() => {
        this.mostrarMensage("Pais agregado con éxito");
        this.router.navigateByUrl('/inicio/lista_paises');
      });
    }
  }


  private cargarDatosAlForm(): void {
    this.paisId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.paisId) {
      this.paisService.obtenerPaisId(this.paisId).subscribe(paises => this.paisForm.patchValue(paises));
    }
  }
  obtenerId(){
    return this.paisId = Number(this.route.snapshot.paramMap.get('id'));
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


