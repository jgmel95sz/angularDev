import { NgxSpinnerService } from 'ngx-spinner';
Component({

  templateUrl: './tipo-cambio.component.html',
})
export class TipoCambioComponent implements OnInit {

  constructor(private spinner :NgxSpinnerService) { }
  
  
  busqueda(){
    this.spinner.show(); //abre carga
   this.spinner.hide();  // cierra carga
}
