import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicios } from 'src/app/Modelo/Servicios';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient) {

   }

  url='http://localhost:8082/servicios/';

  getServicios(){
    return this.http.get<Servicios[]>(this.url + 'all', {
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
    });
  }

  addServicios(servicios:Servicios){
    return this.http.post<Servicios>(this.url, servicios, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    });
  }

  getServiciosId(id:number) {
    return this.http.get<Servicios>(this.url + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    });
  }

  updateServicios(servicios:Servicios){
    return this.http.put<Servicios>(this.url + servicios.id, servicios, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    });
  }

  deleteServicios(servicios:Servicios){
    return this.http.delete<Servicios>(this.url + servicios.id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    })
  }


}
