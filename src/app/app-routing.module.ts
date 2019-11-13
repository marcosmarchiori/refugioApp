import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { InicioComponent } from './inicio/inicio.component';
import { MascotasListarComponent } from './mascotas/mascotas-listar/mascotas-listar.component';
import { MascotasAgregarComponent } from './mascotas/mascotas-agregar/mascotas-agregar.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'mascotas-listar', component: MascotasListarComponent},
  { path: 'mascotas-agregar', component: MascotasAgregarComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
