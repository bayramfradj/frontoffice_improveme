import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {AuthGuard} from './guards/auth.guard';
import {FormationComponent} from './Components/Mission/formation/formation.component';
import {PayanteComponent} from './Components/Mission/payante/payante.component';
import {RecrutementComponent} from './Components/Mission/recrutement/recrutement.component';
import {ShowComponent} from './Components/Mission/show/show.component';

const routes: Routes = [
  {path : '' , component: HomeComponent, canActivate: [AuthGuard] },
  {path : 'Formation' , component: FormationComponent, canActivate: [AuthGuard] },
  {path : 'Payante' , component: PayanteComponent, canActivate: [AuthGuard] },
  {path : 'Recrutement' , component: RecrutementComponent, canActivate: [AuthGuard] },
  {path : 'Show/:id' , component: ShowComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { scrollPositionRestoration: 'enabled',
                                                   anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
