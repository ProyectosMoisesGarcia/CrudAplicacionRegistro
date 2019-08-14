import { Component, OnInit, HostBinding } from '@angular/core';
import { RegistroService } from '../../servicios/registro.service';

@Component({
  selector: 'app-registro-list',
  templateUrl: './registro-list.component.html',
  styleUrls: ['./registro-list.component.css']
})
export class RegistroListComponent implements OnInit {

  @HostBinding ('class') classes = 'row'; 


  registro : any =  []

  constructor(private registroService: RegistroService) { }
    
  ngOnInit() {
    this.obtenerlista();
  }

  obtenerlista() {
    this.registroService.getRegistro().subscribe(
      res => {
        this.registro = res;
        
      },
      
      err => console.error(err)
    );
  }

  deleteRegistro(id: string) {
    this.registroService.eliminarRegistro(id).subscribe(
      res => {
        this.registro = res;
        this.obtenerlista()
      },
      err => console.error(err)
    );
  }



}
