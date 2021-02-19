import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosRealizados } from 'src/app/Modelo/ServiciosRealizados';
import { ServiciosrealizadosService } from '../service/serviciosrealizados.service';

@Component({
  selector: 'app-serviciosrealizados',
  templateUrl: './serviciosrealizados.component.html',
  styleUrls: ['./serviciosrealizados.component.css']
})
export class ServiciosrealizadosComponent implements OnInit {
  serviciosRealizados:ServiciosRealizados[];
  public page:number;
  constructor(private oServiciosRealizadosService:ServiciosrealizadosService, private oRouter:Router) { }

  ngOnInit(): void {
    this.oServiciosRealizadosService.getServiciosRealizados().subscribe(data =>{
      this.serviciosRealizados = data;
    })
  }
}
