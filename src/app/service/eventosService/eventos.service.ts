import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eventos } from 'src/app/modelos/modelosTablas';
import { Disciplinas } from 'src/app/modelos/modelosTablas';


@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private readonly url_api = 'http://127.0.0.1:8000/api';
  constructor(
    private http: HttpClient
  ) { }

  obtenerEventos(): Observable<Eventos[]>{
    return this.http.get<Eventos[]>(`${this.url_api}/eventos`);
  }

  obtenerEventoId(id: number): Observable<Eventos> {
    return this.http.get<Eventos>(`${this.url_api}/eventos/${id}`);
  }
  
  crearEvento(data: Eventos): Observable<Eventos> {
    return this.http.post<Eventos>(`${this.url_api}/eventos`, data);
  }

  actualizarEvento(id: number, data: Eventos): Observable<Eventos> {
    return this.http.put<Eventos>(`${this.url_api}/eventos/${id}`, data);
  }

  eliminarEvento(id: number): Observable<Disciplinas> {
    return this.http.delete<Disciplinas>(`${this.url_api}/eventos/${id}`);
  }

}
