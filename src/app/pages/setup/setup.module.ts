import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SetupComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzInputModule,
    FormsModule
  ]
})
export class SetupModule { }
