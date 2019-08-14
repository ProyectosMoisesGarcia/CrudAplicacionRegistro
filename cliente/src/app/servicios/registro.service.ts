import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registro } from '../componentes/modelos/registro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  API_URI = "http://localhost:3000"
  updateRegistro: any;

  constructor(private http: HttpClient) { }

  getRegistro() {
    return this.http.get(`${this.API_URI}/registro`);
  }

  getRegis(id: string) {
    return this.http.get(`${this.API_URI}/registro/${id}`);
  }

  eliminarRegistro (id: string){
    return this.http.delete(`${this.API_URI}/registro/${id}`);
  }

  crearRegistro ( registro: Registro ) {
    return this.http.post(`${this.API_URI}/registro`, registro);
  }

  actualizarRegistro (id: string|number, updateRegistro: Registro): Observable<Registro> {
    return this.http.put(`${this.API_URI}/registro/${id}`, updateRegistro);
  }


}
