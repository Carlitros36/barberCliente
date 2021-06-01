import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cita, ICita } from 'src/app/Modelo/Cita';
import { Usuario } from 'src/app/Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http:HttpClient) { 

  }

  url='http://localhost:8082/';

  private httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    withCredentials: true
};

  checkSession(): Observable<any> {
    console.log("session.service check");
    return this.http.get<Usuario>(this.url + 'session/' , {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response',
      responseType: 'json',
      withCredentials: true
    }).pipe(
        //tap((u: any) => console.log("session.service check HTTP request executed", u)),            
        catchError(err => {
          //  console.log('session.service: caught error and rethrowing', err);
            return throwError(err);
        })
    )
}
  getCitas(){
    return this.http.get<Cita[]>(this.url + 'cita/all', {
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
    });
  }
  addCita(cita:ICita){
    return this.http.post<ICita>("http://localhost:8082/cita/", cita, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    });
  }

  getCitaId(id:number) {
    return this.http.get<Cita>(this.url + "cita/" + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    });
  }

  updateCita(cita:Cita){
    return this.http.put<Cita>(this.url + "cita/" + cita.id, cita, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    });
  }

  deleteCita(cita:Cita){
    return this.http.delete<Cita>(this.url + "cita/" + cita.id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    })
  }
}
