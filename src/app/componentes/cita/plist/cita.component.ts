import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/Modelo/Cita';
import { Usuario } from 'src/app/Modelo/Usuario';
import { CitaService } from '../service/cita.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  citas:Cita[];
  usuario:Usuario[];
  usuarioSesion:any;
  public page:number;
  constructor(private oCitaService:CitaService, private oRouter:Router) { }

  ngOnInit(): void {
   
this.oCitaService.getCitas().subscribe(data =>{
      this.citas = data;
    })
    console.log(this.citas);
    console.log(this.usuario);
    this.oCitaService.checkSession().subscribe((data) => {
      this.usuarioSesion=data.body;
      console.log(this.usuarioSesion);
      console.log(this.usuarioSesion.tipousuario)
    })
  }

crearCita(usuario){
this.usuario=usuario;
}

  Delete(citas:Cita){
    this.oCitaService.deleteCita(citas).subscribe(data=>{
      this.citas = this.citas.filter(i=>i!==citas);
      alert("Cita eliminada!");
    })
  }
}
