import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineaAcademica } from 'src/app/models/linea-academica';
import { LineaAcademicaService } from 'src/app/services/linea-academica.service';

@Component({
  selector: 'app-update-linea',
  templateUrl: './update-linea.component.html',
  styleUrls: ['./update-linea.component.css']
})
export class UpdateLineaComponent implements OnInit {
  lineaModel:LineaAcademica = new LineaAcademica();
  constructor(private lineaService:LineaAcademicaService, private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  public prueba():void{
    console.log("Este es el ID: "+parseInt(this.activatedRoute.snapshot.params['id']));
    
  }
  public update():void{
    this.lineaService.updateLineaAcademica(this.lineaModel, parseInt(this.activatedRoute.snapshot.params['id'])).subscribe(
      response=>{
        console.log("Los parametros a cambias son: "+this.lineaModel.nombre+","+
        this.lineaModel.id_plan);
        console.log("La ID del registro a actualizar es: "+ this.activatedRoute.snapshot.params['id']);
        console.log(response);
      }
    )
  }
}
