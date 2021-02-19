import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Inventario } from '../../../Modelo/Inventario';


@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http:HttpClient) { 

  }

  url='http://localhost:8082/inventario/';

  getInventario(){
    return this.http.get<Inventario[]>(this.url + 'all', {
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
      //SUPER NECESARIO PARA QUE FUNCIONE EL LOGIN
    });
  }

  addInventario(inventario:Inventario){
    return this.http.post<Inventario>(this.url, inventario, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    });
  }

  getInventarioId(id:number) {
    return this.http.get<Inventario>(this.url + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    });
  }

  updateInventario(inventario:Inventario){
    return this.http.put<Inventario>(this.url + inventario.id, inventario, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    });
  }

  deleteInventario(inventario:Inventario){
    return this.http.delete<Inventario>(this.url + inventario.id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    })
  }

}
