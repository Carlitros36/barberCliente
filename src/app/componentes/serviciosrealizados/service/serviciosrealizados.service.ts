import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiciosRealizados } from 'src/app/Modelo/ServiciosRealizados';

@Injectable({
  providedIn: 'root'
})
export class ServiciosrealizadosService {
  
  
  constructor(private http:HttpClient) { 

  }

  url='http://localhost:8082/servicios_realizados/';

  getServiciosRealizados(){
    return this.http.get<ServiciosRealizados[]>(this.url + 'all', {
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
    });
  }
}
