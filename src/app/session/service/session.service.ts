import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, take, publishReplay, refCount, retry, catchError, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { IUsuario, Usuario } from 'src/app/Modelo/Usuario';


@Injectable({
    providedIn: 'root'
})

export class SessionService {


    constructor(private http: HttpClient, private router: Router) { }

    url = 'http://localhost:8082/session/';
    id:number;
    nombre:string;
    onCheck = new EventEmitter<any>();

    handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        //window.alert(errorMessage);
        return throwError(errorMessage);
    }

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        withCredentials: true
    };

    

    login(loginData: any): Observable<any> {
        return this.http.post(this.url, loginData, this.httpOptions).pipe(
            tap((u: any) => this.id = u.id),
            tap((u: any) => this.nombre = u.nombre),
            retry(1), catchError(this.handleError)
            );
        }

    logout(): Observable<any> {
        localStorage.clear();
        return this.http.delete(this.url, this.httpOptions).pipe(retry(1), catchError(this.handleError));
        
    }

    check(): Observable<any> {
        console.log("session.service check");
        return this.http.get<any>(this.url, this.httpOptions).pipe(
            //tap((u: any) => console.log("session.service check HTTP request executed", u)),            
            catchError(err => {
              //  console.log('session.service: caught error and rethrowing', err);
                return throwError(err);
            })
        )
    }
}