import * as XLSX from 'xlsx';

@Component({
  selector: 'app-reactive-favorite-color',
  template: `
 <div class="card">
  <div class="card-body">
    <div class="row">
      <div class="col-lg">
         
               <div class="table">
                  <table  class="table table-responsive "id="tablecompras" #tablecompras>
                      <thead class="text-center table-bordered"> </thead>
                      <tbody class="table-borderless" *ngFor="let item of regCompras?.listRegistroCompraDet">
                      </tbody>
                    </table>
               </div>
      </div><!--FIN COL-->
    </div><!--FIN ROW-->
    <div> <button  (click)="ExportToExcel()">Export To excel</button></div>
  </div>
</div>
  `
})

export class Excel {
@ViewChild('tablecompras') tablecompras: ElementRef;

  ExportToExcel()
  {  
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.tablecompras.nativeElement,{dateNF:"dd/mm/yyyy",raw:true});
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'librocompra');

    /* save to file */
    XLSX.writeFile(wb, 'librocompra.xlsx');
  }
}

