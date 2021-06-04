import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Inventario } from '../../../Modelo/Inventario';
import { Observable, throwError } from 'rxjs';
import { Usuario } from 'src/app/Modelo/Usuario';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InventarioService {

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

  getInventario(){
    return this.http.get<Inventario[]>(this.url + 'inventario/all', {
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
    });
  }

  addInventario(inventario:Inventario){
    return this.http.post<Inventario>(this.url + "inventario/", inventario, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    });
  }

  getInventarioId(id:number) {
    return this.http.get<Inventario>(this.url + "inventario/" + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    });
  }

  updateInventario(inventario:Inventario){
    return this.http.put<Inventario>(this.url + "inventario/" + inventario.id, inventario, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    });
  }

  deleteInventario(inventario:Inventario){
    return this.http.delete<Inventario>(this.url + "inventario/" + inventario.id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    })
  }

}
