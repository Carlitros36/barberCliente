import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventario } from 'src/app/Modelo/Inventario';
import { InventarioService } from '../service/inventario.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  inventario:Inventario = new Inventario();
  constructor(private router:Router, private oInventarioService:InventarioService) { }

  ngOnInit(): void {
    this.Editar();
  }


  Editar(){
    let id=localStorage.getItem("id");
    this.oInventarioService.getInventarioId(+id).subscribe(data=>{
      this.inventario=data;
    })
  }

  Actualizar(inventario:Inventario){
    this.oInventarioService.updateInventario(inventario).subscribe(data=>{
      this.inventario = data;
      alert("Inventario actualizado con éxito!!");
      this.router.navigate(["inventario"]);
    })
  }

}
