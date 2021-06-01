import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventario } from '../../../Modelo/Inventario';
import { InventarioService } from '../service/inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

 
  inventario:Inventario[];
  public page:number;
  constructor(private oInventarioService:InventarioService, private oRouter:Router) { }

  ngOnInit(): void {
    this.oInventarioService.getInventario().subscribe(data =>{
      this.inventario = data;
    })
  }

  Editar(inventario:Inventario){
    localStorage.setItem("id",inventario.id.toString());
    this.oRouter.navigate(["editInventario"]);
  }
  Delete(inventario:Inventario){
    this.oInventarioService.deleteInventario(inventario).subscribe(data=>{
      this.inventario = this.inventario.filter(i=>i!==inventario);
      alert("Inventario eliminado!");
    })
  }

}
