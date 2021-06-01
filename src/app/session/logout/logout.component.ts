import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUsuario, Usuario } from 'src/app/Modelo/Usuario';
import { HelperService } from '../helper.service';
import { SessionService } from '../service/session.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit {

  oUsuarioSession: IUsuario;

  sesion:Usuario;

  message: any;
  editMessage: boolean= false;
  constructor(
    private helper:HelperService,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oSessionService: SessionService) {

    console.log("logout.component constructor");
    console.log(this.oRoute.snapshot.data.message);
    this.sesion=this.oRoute.snapshot.data.message;


    if (!this.oRoute.snapshot.data.message) {
      oRouter.navigate(['/home']);
    } else {
      this.oUsuarioSession = this.oRoute.snapshot.data.message;
    }
  }

  ngOnInit() {
    console.log("logout.component ngOninit")
  }

  public closeSession() {
    this.oSessionService.logout().subscribe(data => {
      this.helper.changeMessage(this.editMessage);
      this.oRouter.navigate(['/login']);
    });
  }
}