import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medallas } from 'src/app/modelos/modelosTablas';
@Injectable({
  providedIn: 'root'
})
export class MedallasService {
  private readonly url_api = 'http://127.0.0.1:8000/api';
  constructor(
    private http: HttpClient
  ) { }

  obtenerMedallas(): Observable<Medallas[]>{
    return this.http.get<Medallas[]>(`${this.url_api}/medallas`);
  }

  obtenerMedallaId(id: number): Observable<Medallas> {
    return this.http.get<Medallas>(`${this.url_api}/medallas/${id}`);
  }
  
  crearMedalla(data: Medallas): Observable<Medallas> {
    return this.http.post<Medallas>(`${this.url_api}/medallas`, data);
  }

  actualizarMedalla(id: number, data: Medallas): Observable<Medallas> {
    return this.http.put<Medallas>(`${this.url_api}/medallas/${id}`, data);
  }

  eliminarMedalla(id: number): Observable<Medallas> {
    return this.http.delete<Medallas>(`${this.url_api}/medallas/${id}`);
  }

}
