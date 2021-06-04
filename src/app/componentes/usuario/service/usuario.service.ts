import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { IUsuario, Usuario } from '../../../Modelo/Usuario';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) {

   }

  url='http://localhost:8082/';

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


  getUsuarios(){
    return this.http.get<Usuario[]>(this.url + 'usuario/all', {
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
    });
  }

  getUsuariosCita(){
    return this.http.get<Usuario[]>(this.url + 'usuario/allCitas', {
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
    });
  }

  getUsuario(id:any){
    return this.http.get<Usuario[]>(this.url + "usuario/" + id, {
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
    });
  }

register(usuario:IUsuario){
    return this.http.post<Usuario>(this.url + 'usuario/register', usuario, {
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
    });
  }
}
