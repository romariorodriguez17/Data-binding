import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Interpolation'

  textoPlaceholder = 'property binding '
  deshabilitado: boolean = true
  imgSrc = 'https://blog.knoldus.com/wp-content/uploads/2020/06/angular.png'

  // event-binding
  texto: string = 'esto es even-binding'

  // two-data-binding
  textInput: string = 'probando two-way-data-binding'

  constructor() {
    // interpolation
    setTimeout(() => {
      this.name = 'Data Binding (interpolation)'
    }, 2000)

    //Property binding
    setTimeout(() => {
      this.deshabilitado = false
    }, 3000)
  }
  // llamando metodo (interpolation )
  getSuma(numero1: number, numero2: number) {
    return numero1 + numero2
  }

  cambiarTexto(): void {
    this.texto = 'probando cambio de texto para probar el event-binding'
  }


}
