import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyect000-curso';
  nombre = 'Jairo Sotomayor';
  edad = 17;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;

  esActivo(){
    if (this.activo)
        return 'trabajador Activo';
      else
        return 'trabajador inactivo';
  }

  ultimos3Sueldos(){
    let suma = 0
    for(let x =0; x<this.sueldos.length; x++)
    suma+=this.sueldos[x];
    return suma;
  }
}
