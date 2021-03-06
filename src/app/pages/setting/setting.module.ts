import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { ActionComponent } from '../setting-action/action.component';
import { SettingRoutingModule } from './setting-routing.module';
import { Store } from '../../store/counter.store';
import { AntdModule } from '../../antdModule/antdModule.module';


@NgModule({
  declarations: [
    SettingComponent,
    ActionComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    AntdModule,
  ],
  providers: [
    { provide: Store }
  ]
})
export class SettingModule { }
