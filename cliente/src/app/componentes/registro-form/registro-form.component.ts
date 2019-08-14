import { Component, OnInit, HostBinding } from '@angular/core';
import { Registro } from 'src/app/componentes/modelos/registro'
import {  Router, ActivatedRoute } from '@angular/router';

import { RegistroService } from 'src/app/servicios/registro.service';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {

@HostBinding('class') classes = 'row'

 registro: Registro = {
   id: 0,
   nombre: '',
   apellidopat: '',
   apellidomat: '',
   email: '',
   fchnac: '',
   fchingreso: '',
   created_at:  new Date()
 };

 edit: boolean = false;

  constructor(private registroService: RegistroService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
   const params = this.activatedRoute.snapshot.params;
   if (params.id) {
     this.registroService.getRegis(params.id)
     .subscribe(
       res => {
        console.log(res);
        this.registro = res;
        this.edit = true;
       },
       err => console.error(err) 
     )
   }
  }

  crearRegistro() {
   delete this.registro.created_at;
   delete this.registro.id;

    this.registroService.crearRegistro(this.registro)
    .subscribe(
      res => {
      console.log(res);
        this.router.navigate(['/registro'])
      },
      err => console.error(err) 
    )
  }

  actualizarRegistro() {
    delete this.registro.created_at;
   this.registroService.actualizarRegistro(this.registro.id, this.registro)
   .subscribe(
    res => {
    console.log(res);
    this.router.navigate(['/registro']);
    },
    err => console.error(err) 
   )
  }

}
