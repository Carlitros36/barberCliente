import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { SessionService } from '../service/session.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import { IUsuario } from 'src/app/Modelo/Usuario';
import { ILogin } from 'src/app/Modelo/Login';
import { HelperService } from '../helper.service';

//import { DialogsService } from '../../service/dialogs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public result: any;
  public data: any;
  formularioLogin: FormGroup;
  public dataCheck: any;
  stock = "hola mundo";

  oUsuarioSession: IUsuario;

  message: any;
  editMessage: boolean = true;
  constructor(
    private helper:HelperService,
    private FormBuilder: FormBuilder,
    // private dialogsService: DialogsService,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oSessionService: SessionService) {

    if (this.oRoute.snapshot.data.message) {
      oRouter.navigate(['/home']);
    } else {
      this.oUsuarioSession = this.oRoute.snapshot.data.message;
      console.log(this.oUsuarioSession);
    }

    //this.loginData = null; //{ user: "", password: "" };
    this.formularioLogin = <FormGroup>this.FormBuilder.group({
      login: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  /* public openDialog() {
     console.log("--");
     this.dialogsService
       .confirm('Confirm Dialog', 'Are you sure you want to do this?')
       .subscribe(res => this.result = res);
     //https://stackblitz.com/edit/material-dialogs-sample?file=app%2Fapp.component.ts
     return false; // if you don't return false pops console ERROR TypeError: this.selector is not a function
   }*/

  onSubmit() {
    const formData: any = new FormData();
    const loginData = { login: this.formularioLogin.get('login')!.value, password: this.formularioLogin.get('password')!.value };
    console.log(formData);
    this.oSessionService.login(JSON.stringify(loginData)).subscribe(
      data => {
        this.data = data;
        this.helper.changeMessage(this.editMessage);
        console.log(data);
        if (this.data != null) {
          this.oRouter.navigate(['/home']);
        } else {
          //this.dialog.open(DialogDataExampleDialog, "error de autenticación");
        }
      }
    );
    return false;
  }

}