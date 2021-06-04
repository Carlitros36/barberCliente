import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita, ICita } from 'src/app/Modelo/Cita';
import { IUsuario, Usuario } from 'src/app/Modelo/Usuario';
import { SessionService } from 'src/app/session/service/session.service';
import { UsuarioService } from '../../usuario/service/usuario.service';
import { CitaService } from '../service/cita.service';

@Component({
  selector: 'app-addcita',
  templateUrl: './addcita.component.html',
  styleUrls: ['./addcita.component.css']
})
export class AddcitaComponent implements OnInit {

  
  
  usuariodos: IUsuario[];
  formulario: any;
  usuarioSesion: any;
  usuarioAll: IUsuario[] = [];


  constructor(private router:Router,private activatedRoute: ActivatedRoute, private oCitaService:CitaService, 
    public oSessionService:SessionService, private formBuilder:FormBuilder, public oUsuarioService:UsuarioService) {

    if(!this.activatedRoute.snapshot.data.message){
      console.log("Sesión activa", this.activatedRoute.snapshot.data.message);
    } else {
      console.log("Sin sesión", this.activatedRoute.snapshot.data.message);
      this.usuariodos = this.activatedRoute.snapshot.data.message;
    }


    this.formulario = this.formBuilder.group({
      fecha: [],
      hora: [],
    
    })
    
    }
  ngOnInit(): void {
    console.log(this.oSessionService);
    console.log(this.activatedRoute.snapshot.data.message)
    this.oCitaService.checkSession().subscribe((data) => {
      this.usuarioSesion=data.body;
      console.log(this.usuarioSesion);
      console.log(this.usuarioSesion.tipousuario)
    })
  //  console.log(this.oUsuarioService.getUsuario(this.usuario.id));
 // this.getUsuarios();
  //this.formulario.get('usuario')!.value = this.usuarioAll;
  }

  getUsuarios(){
    this.oUsuarioService.getUsuarios().subscribe((res) => {
      this.usuarioAll = res as IUsuario[];
      console.log(res as IUsuario[]);
    });
  }

  createFromForm(): ICita{
    return {
      ...new Cita(),
      fecha: this.formulario.get(['fecha'])!.value,
      hora: this.formulario.get(['hora'])!.value + ":00",
      usuario: this.usuarioSesion,
    }
  }

  add(): void{
    const cita = this.createFromForm();
    console.log(cita);
    this.oCitaService.addCita(cita)
    .subscribe(data=>{
    alert("Cita Reservada Correctamente!!");
    this.router.navigate(["cita"]);
    })
  }
}
