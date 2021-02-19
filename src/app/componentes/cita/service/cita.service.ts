import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from 'src/app/Modelo/Cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http:HttpClient) { 

  }

  url='http://localhost:8082/cita/';

  getCitas(){
    return this.http.get<Cita[]>(this.url + 'all', {
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
    });
  }
  addCita(cita:Cita){
    return this.http.post<Cita>(this.url, cita, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    });
  }

  getCitaId(id:number) {
    return this.http.get<Cita>(this.url + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    });
  }

  updateCita(cita:Cita){
    return this.http.put<Cita>(this.url + cita.id, cita, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    });
  }

  deleteCita(cita:Cita){
    return this.http.delete<Cita>(this.url + cita.id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    })
  }
}
