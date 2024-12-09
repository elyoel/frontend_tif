import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplinas } from 'src/app/modelos/modelosTablas';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {
  private readonly url_api = 'http://127.0.0.1:8000/api';
  constructor(
    private http: HttpClient
  ) { }

  obtenerDisciplinas(): Observable<Disciplinas[]>{
    return this.http.get<Disciplinas[]>(`${this.url_api}/disciplinas`);
  }

  obtenerDisciplinaId(id: number): Observable<Disciplinas> {
    return this.http.get<Disciplinas>(`${this.url_api}/disciplinas/${id}`);
  }
  
  crearDisciplina(data: Disciplinas): Observable<Disciplinas> {
    return this.http.post<Disciplinas>(`${this.url_api}/disciplinas`, data);
  }

  actualizarDisciplina(id: number, data: Disciplinas): Observable<Disciplinas> {
    return this.http.put<Disciplinas>(`${this.url_api}/disciplinas/${id}`, data);
  }

  eliminarDisciplina(id: number): Observable<Disciplinas> {
    return this.http.delete<Disciplinas>(`${this.url_api}/disciplinas/${id}`);
  }

}
