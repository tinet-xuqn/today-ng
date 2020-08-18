import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';



@NgModule({
  declarations: [SetupComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzInputModule
  ]
})
export class SetupModule { }
