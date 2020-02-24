
import { HostListener } from '@angular/core';
@Component({
  templateUrl: './tipo-cambio.component.html',
})

export class TipoCambioComponent implements OnInit {
/*Metodo para que al presionar la Tecla Insert del teclado , se pueda ejecutar por ejemplo el modal para Insertar nuevo parametro*/
@HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    console.log(event.key)
    if(event.key==="Insert"){
      this.abrirModal();
    }

  }
}


