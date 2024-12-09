import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participantes } from 'src/app/modelos/modelosTablas';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {
  private readonly url_api = 'http://127.0.0.1:8000/api';
  constructor(
    private http: HttpClient
  ) { }

  obtenerParticipantes(): Observable<Participantes[]>{
    return this.http.get<Participantes[]>(`${this.url_api}/participantes`);
  }

  obtenerParticipanteId(id: number): Observable<Participantes> {
    return this.http.get<Participantes>(`${this.url_api}/participantes/${id}`);
  }
  
  crearParticipante(data: Participantes): Observable<Participantes> {
    return this.http.post<Participantes>(`${this.url_api}/participantes`, data);
  }

  actualizarParticipante(id: number, data: Participantes): Observable<Participantes> {
    return this.http.put<Participantes>(`${this.url_api}/participantes/${id}`, data);
  }

  eliminarParticipante(id: number): Observable<Participantes> {
    return this.http.delete<Participantes>(`${this.url_api}/participantes/${id}`);
  }

}
