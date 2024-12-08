import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/modelos/pais';
import { PaisService } from 'src/app/service/paisService/pais.service';

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
}
