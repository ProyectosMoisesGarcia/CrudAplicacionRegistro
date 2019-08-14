import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroListComponent } from './componentes/registro-list/registro-list.component';
import { RegistroFormComponent } from './componentes/registro-form/registro-form.component';

const routes: Routes = [
      {
    path: '',
    redirectTo: '/registro',
    pathMatch: 'full'
  },
  
  {
  path: 'registro',
  component: RegistroListComponent,
  },

  {
  path: 'registro/add',
  component: RegistroFormComponent,
  },

  {
  path: 'registro/edit/:id',
  component: RegistroFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
