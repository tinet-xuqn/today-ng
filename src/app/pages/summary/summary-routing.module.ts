import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary.component';
import { InitGuardGuard } from '../../init-guard.guard';

const routes: Routes = [
  {
    path: 'summary',
    component: SummaryComponent,
    canActivate: [ InitGuardGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule { }
