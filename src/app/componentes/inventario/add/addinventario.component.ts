import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { InventarioService } from '../service/inventario.service';
import { Inventario } from '../../../Modelo/Inventario';

@Component({
  selector: 'app-addinventario',
  templateUrl: './addinventario.component.html',
  styleUrls: ['./addinventario.component.css']
})
export class AddinventarioComponent implements OnInit {

  inventario:Inventario = new Inventario();
  constructor(private router:Router, private oInventarioService:InventarioService,private FormBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  add(){
    this.oInventarioService.addInventario(this.inventario)
    .subscribe(data=>{
    alert("Material de inventario añadido correctamente!!");
    this.router.navigate(["inventario"]);
    })
  }
}
