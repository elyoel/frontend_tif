import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/modelos/modelosTablas';
import { PaisService } from 'src/app/service/paisService/pais.service';
import * as Toastify from 'toastify-js';


@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css']
})
export class ListaPaisesComponent implements OnInit{
  paises: Pais[] = [];

  constructor(
    private paisService: PaisService
  ){ }

  ngOnInit(): void{
    this.cargarPaises();
  }

  private cargarPaises(): void{
    this.paisService.obtenerPaises().subscribe(paises =>{
      this.paises = paises;
    })
  }
  eliminarPais(id: number): void {
    this.paisService.eliminarPais(id).subscribe(() => {
      this.mostrarMensage('Pais eliminado');
      this.paises = this.paises.filter  (pais => pais.id != id);
    });
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