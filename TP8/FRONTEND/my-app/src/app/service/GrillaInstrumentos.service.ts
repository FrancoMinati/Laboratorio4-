import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable, map } from 'rxjs';
import Instrumento from '../types/Instrumento.model';
import { InstrumentJson } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class GrillaInstrumentosService {
  constructor(private http: HttpClient) {}
  getInstrumentos(): Observable<Instrumento[]> {
    return this.http
      .get<Instrumento[]>('http://localhost:8080/instrumentos')
      .pipe(map((res) => res));
  }
  getInstrumento(id: number): Observable<Instrumento> {
    return this.http.get<Instrumento>(
      `http://localhost:8080/instrumentos/${id}`
    );
  }

  deleteInstrumento(id: number | undefined): Observable<any> {
    const urlServer = `http://localhost:8080/instrumentos/${id}`;
    return this.http.delete(urlServer);
  }

  postListOfInstrumentos(): Observable<any> {
    const urlServer = 'http://localhost:8080/instrumentos/save-list';

    return this.http.post(urlServer, InstrumentJson);
  }
  saveOrUpdateInstrumento(instrumento: Instrumento): Observable<any> {
    let url = 'http://localhost:8080/instrumentos/save';
    let method = 'POST';

    if (instrumento && instrumento.id !== undefined) {
      url +=  `/${instrumento.id} `;
      method = 'PUT';
    } else {
      url += '';
    }
    return this.http
      .request(method, url, {
        body: instrumento,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(map((res) => res));
  }
}
