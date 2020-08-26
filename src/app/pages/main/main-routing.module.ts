import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DetailComponent } from './detail/detail.component';
import { InitGuardGuard } from '../../init-guard.guard';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [ InitGuardGuard ],
    children: [
      {
        path: ':id',
        component: DetailComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
