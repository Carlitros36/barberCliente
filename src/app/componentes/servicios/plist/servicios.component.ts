import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicios } from 'src/app/Modelo/Servicios';
import { ServiciosService } from '../service/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  servicios:Servicios[];
  public page:number;
  constructor(private oServiciosService:ServiciosService, private oRouter:Router) { }

  ngOnInit(): void {
    this.oServiciosService.getServicios().subscribe(data =>{
      this.servicios = data;
    })
  }

  Editar(servicios:Servicios){
    localStorage.setItem("id",servicios.id.toString());
    this.oRouter.navigate(["editServicios"]);
  }
  Delete(servicios:Servicios){
    this.oServiciosService.deleteServicios(servicios).subscribe(data=>{
      this.servicios = this.servicios.filter(i=>i!==servicios);
      alert("Servicio eliminado!");
    })
  }
}
