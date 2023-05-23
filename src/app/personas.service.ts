import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PersonasService {
  private apiUrl = 'http://localhost:3000/api/personas';

  constructor(private http: HttpClient) {}

  // Obtener los datos de las personas desde el backend
  public getPersonas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
