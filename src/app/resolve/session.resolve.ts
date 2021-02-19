import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of, throwError } from 'rxjs/';
import { catchError, delay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SessionService } from '../session/service/session.service';
import { IUsuario } from '../Modelo/Usuario';

@Injectable()
export class SessionResolver implements Resolve<Observable<IUsuario | null>> {

    constructor(private oSessionService: SessionService) { }

    resolve(): Observable<IUsuario | null> {
        console.log("resolver");
        return this.oSessionService.check().pipe(
            catchError(error => {
                console.log('session.resolver: caught error', error);
                return of(null) // si hay error devolvemos un observable de null
                //return throwError(error);
            }));

    }

}