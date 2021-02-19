import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../Modelo/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public page:number;
  usuarios:Usuario[] | undefined;
  constructor( private oUsuarioService:UsuarioService, private oRouter:Router) { 
  }



  ngOnInit(): void {
    this.oUsuarioService.getUsuarios().subscribe(data =>{
      this.usuarios = data;
    })
  }
/*
  serviciousuarios = this.usuarioService;

  getAll(){
    this.usuarioService.getUsuarios().subscribe(res => {
      this.usuarioService.usuarios=res as Usuario[];
      console.log(res);
    })
  }*/

}
