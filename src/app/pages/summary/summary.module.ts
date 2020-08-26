import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { SummaryRoutingModule } from './summary-routing.module';

import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzCalendarModule,
    NzNotificationModule,
    NzLayoutModule,
    NzIconModule,
    SummaryRoutingModule
  ]
})
export class SummaryModule { }
