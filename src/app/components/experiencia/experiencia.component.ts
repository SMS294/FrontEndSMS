import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'app/model/experiencia';
import { SerExperienciaService } from 'app/service/ser-experiencia.service';
import { TokenService } from 'app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private serExperiencia: SerExperienciaService, private tokenService: TokenService) {}
     isLogged = false;

    ngOnInit(): void {
      this.cargarExperiencia();
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
   }
   cargarExperiencia(): void {
    this.serExperiencia.lista().subscribe(data => { this.expe = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.serExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}

