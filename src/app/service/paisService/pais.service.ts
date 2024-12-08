import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from 'src/app/modelos/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private readonly url_api = 'http://127.0.0.1:8000/api';
  constructor(
    private http: HttpClient
  ) { }

  obtenerPaises(): Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.url_api}/pais`);
  }
}
