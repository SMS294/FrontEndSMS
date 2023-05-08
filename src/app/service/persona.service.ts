import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environments } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = environments.URL + "/personas/";
  constructor(private http: HttpClient) { }
  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL + 'traer/perfil' );
  }
}
