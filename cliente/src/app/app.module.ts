import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { RegistroFormComponent } from './componentes/registro-form/registro-form.component';
import { RegistroListComponent } from './componentes/registro-list/registro-list.component';

import { RegistroService } from './servicios/registro.service';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    RegistroFormComponent,
    RegistroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RegistroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
