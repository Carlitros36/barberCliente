import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../Modelo/Usuario';

@Injectable()
export class HelperService {
  private message = new BehaviorSubject<boolean>(false);
  public customMessage = this.message.asObservable();

  private usuarioID = new BehaviorSubject<number>(null);
  public customMessageUsuarioID = this.usuarioID.asObservable();

  
  constructor(private http:HttpClient) { }

  public changeMessage(msg: boolean): void {
    this.message.next(msg);
  }

  public changeUsuarioID(msg: number): void {
    this.usuarioID.next(msg);
    console.log("Helper Tipousuario ",msg);
  }
}
