import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './pages/setup/setup.component';
import { InitGuardGuard } from './init-guard.guard';

const routes: Routes = [
  { path: 'setup', component: SetupComponent, canActivate: [ InitGuardGuard ] },
  { path: 'main', redirectTo: '/main', pathMatch: 'full' },
  { path: '', pathMatch: 'full', redirectTo: '/setup' },
  { path: 'summary', redirectTo: '/summary', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
