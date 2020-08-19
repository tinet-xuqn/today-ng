import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MainRoutingModule } from './main-routing.module';
import { LeftControlComponent } from './left-control/left-control.component';
import { ListComponent } from './left-control/list/list.component';



@NgModule({
  declarations: [MainComponent, LeftControlComponent, ListComponent],
  imports: [
    MainRoutingModule,
    NzIconModule,
    NzButtonModule,
    NzMenuModule,
    CommonModule,
    NzLayoutModule
  ]
})
export class MainModule { }
