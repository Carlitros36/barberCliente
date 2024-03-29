import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/componentes/cita/service/cita.service';
import { HelperService } from 'src/app/session/helper.service';
import { SessionService } from '../../session/service/session.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  message:any;
  messageTipoUsuario:any;
  constructor(public oSessionService:SessionService, private helper:HelperService) { }

  ngOnInit(): void { 
    
    this.helper.customMessage.subscribe((msg) => {
      this.message = msg;
      //console.log(this.message);
    });
    this.helper.customMessageUsuarioID.subscribe((msg) => {
      this.messageTipoUsuario = msg;
    })
  }

}
