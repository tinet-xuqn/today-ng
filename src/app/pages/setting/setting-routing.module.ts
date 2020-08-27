import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting.component';
import { InitGuardGuard } from '../../init-guard.guard';

const routes: Routes = [
  {
    path: 'setting',
    component: SettingComponent,
    canActivate: [ InitGuardGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
