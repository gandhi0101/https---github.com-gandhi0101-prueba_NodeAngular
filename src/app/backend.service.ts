import { Injectable } from '@angular/core';
import { environment } from '/src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BackendService {
  private baseUrl = `http://localhost:${environment.backendPort}`;

  constructor(private http: HttpClient) {}

  // Ejemplo de solicitud GET al backend
  public getData() {
    const url = `${this.baseUrl}/api/ruta`;
    return this.http.get(url);
  }
}
