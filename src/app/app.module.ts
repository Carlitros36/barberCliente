import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {HelperService} from './session/helper.service'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitaComponent } from './componentes/cita/plist/cita.component';
import { InventarioComponent } from './componentes/inventario/plist/inventario.component';
import { ServiciosComponent } from './componentes/servicios/plist/servicios.component';
import { ServiciosrealizadosComponent } from './componentes/serviciosrealizados/plist/serviciosrealizados.component';
import { TipousuarioComponent } from './componentes/tipousuario/tipousuario.component';
import { UsuarioComponent } from './componentes/usuario/plist/usuario.component';
import { HeaderComponent } from './include/header/header.component';
import { FooterComponent } from './include/footer/footer.component';
import { LoginComponent } from './session/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { LogoutComponent } from './session/logout/logout.component';

import { SessionResolver } from './resolve/session.resolve';
import { SessionService } from './session/service/session.service';
import { AddinventarioComponent } from './componentes/inventario/add/addinventario.component';
import { EditComponent } from './componentes/inventario/edit/edit.component';
import { AddcitaComponent } from './componentes/cita/add/addcita.component';
import { RegisterComponent } from './componentes/usuario/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    CitaComponent,
    InventarioComponent,
    ServiciosComponent,
    ServiciosrealizadosComponent,
    TipousuarioComponent,
    UsuarioComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    AddinventarioComponent,
    EditComponent,
    AddcitaComponent,
    RegisterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [SessionResolver, SessionService, HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
