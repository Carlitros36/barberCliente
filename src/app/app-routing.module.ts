import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitaComponent } from './componentes/cita/plist/cita.component';
import { HomeComponent } from './componentes/home/home.component';
import { InventarioComponent } from './componentes/inventario/plist/inventario.component';
import { ServiciosComponent } from './componentes/servicios/plist/servicios.component';
import { ServiciosrealizadosComponent } from './componentes/serviciosrealizados/plist/serviciosrealizados.component';
import { TipousuarioComponent } from './componentes/tipousuario/tipousuario.component';
import { UsuarioComponent } from './componentes/usuario/plist/usuario.component';
import { LoginComponent } from './session/login/login.component'
import { LogoutComponent } from './session/logout/logout.component'

import { SessionResolver } from './resolve/session.resolve';
import { AddinventarioComponent } from './componentes/inventario/add/addinventario.component';
import { EditComponent } from './componentes/inventario/edit/edit.component';



const routes: Routes = [
{path:'cita', component:CitaComponent},
{path:'home', component:HomeComponent},
{path:'inventario', component:InventarioComponent},
{path:'servicios', component:ServiciosComponent},
{path:'serviciosrealizados', component:ServiciosrealizadosComponent},
{path:'usuario', component:UsuarioComponent},
{path:'tipousuario', component:TipousuarioComponent},
{path:'login', component:LoginComponent, resolve: { message: SessionResolver} },
{path:'logout', component:LogoutComponent, resolve: { message: SessionResolver} },
{path:'addinventario', component:AddinventarioComponent},
{path:'editInventario', component:EditComponent},
{path:'servicios', component:ServiciosComponent},
{path:'serviciosRealizados', component:ServiciosrealizadosComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
