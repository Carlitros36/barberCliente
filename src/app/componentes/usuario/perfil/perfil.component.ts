import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario, Usuario } from 'src/app/Modelo/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuarioSesion:any;
  usuarioPerfil:any;
  constructor(private oRouter:Router, private oUsuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.oUsuarioService.checkSession().subscribe((data) => {
      this.usuarioSesion=data.body;
      console.log(this.usuarioSesion);
      console.log(this.usuarioSesion.tipousuario)
    })
  }



}
