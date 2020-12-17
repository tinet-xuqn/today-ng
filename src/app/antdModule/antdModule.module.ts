import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
@NgModule({
  declarations: [
  ],
  imports: [
    NzIconModule,
    NzButtonModule,
    NzModalModule,
    NzMenuModule,
    NzFormModule,
    NzDropDownModule,
    NzListModule,
    NzInputModule,
    NzCheckboxModule,
    NzPopconfirmModule,
    NzMessageModule,
    NzDatePickerModule,
    NzSwitchModule,
    NzDividerModule,
    NzLayoutModule
  ],
  exports: [
    NzIconModule,
    NzButtonModule,
    NzModalModule,
    NzMenuModule,
    NzFormModule,
    NzDropDownModule,
    NzListModule,
    NzInputModule,
    NzCheckboxModule,
    NzPopconfirmModule,
    NzMessageModule,
    NzDatePickerModule,
    NzSwitchModule,
    NzDividerModule,
    NzLayoutModule
  ]
})
export class AntdModule { }
