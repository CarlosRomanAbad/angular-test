import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


calculateYear() {
  return 2024 - this.edad;
}
  

  nombre = ''
  edad = 0
  apellido = '';
  calcularA: any;
  lifetime = 'young'



  ngOnInit(): void {
    this.apellido = 'Perez';
    this.nombre = 'Juan';
    this.edad = 45;
    if(this.edad > 30) {
      this.lifetime = 'adult'
    }
  }
  



}
