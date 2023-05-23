import { Component, OnInit } from '@angular/core';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'frontend';
  
  personas: { nombre: string, apellido: string, edad: number, correo: string }[] = [];


  constructor(private personasService: PersonasService) {}

  ngOnInit(): void {
    
    this.personasService.getPersonas().subscribe(
      (data: any[]) => {
        this.personas = data;
        console.log("estoy dentro");
        console.log(JSON.stringify(this.personas[0]));
      },
      (error) => {
        console.error('Error al obtener los datos de las personas:', error);
      }
    );
    console.log("estoy afuera");
    console.log(JSON.stringify(this.personas));    
  }
}
