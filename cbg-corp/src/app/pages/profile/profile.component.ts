import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {

  employee: any;
  colCountByScreen: object;

  constructor() {
    this.employee = {
      ID: 7,
      Nombres: 'Sandra',
      Apellidos: 'Johnson',
      Prefijo: 'Sñra.',
      Posición: 'Controlador',
      Imagen: 'images/employees/06.png',
      Fecha_de_nacimiento: new Date('1974/11/5'),
      Fecha_de_contrato: new Date('2005/05/11'),
      Notas: 'Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.',
      Dirección: '4600 N Virginia Rd.'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}
