import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario, Usuario } from 'src/app/Modelo/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formulario: any;
  constructor(private router:Router, private activatedRoute: ActivatedRoute, private formBuilder:FormBuilder, public oUsuarioService:UsuarioService) {

    this.formulario = this.formBuilder.group({
      nombre: [],
      apellido1: [],
      apellido2: [],
      login: [],
      password: [],
      email: []
    })

   }

  ngOnInit(): void {
  }

  createFromForm(): IUsuario{
    return {
      ...new Usuario(),
      nombre: this.formulario.get(['nombre'])!.value,
      apellido1: this.formulario.get(['apellido1'])!.value,
      apellido2: this.formulario.get(['apellido2'])!.value,
      login: this.formulario.get(['login'])!.value,
      password: this.formulario.get(['password'])!.value,
      email: this.formulario.get(['email'])!.value,

    }
  }

  registerUser(): void{
    const usuario = this.createFromForm();
    console.log(usuario);
    this.oUsuarioService.register(usuario)
    .subscribe(data=>{
    alert("Usted se ha registrado correctamente!!");
    this.router.navigate(["login"]);
    })
  }

}
