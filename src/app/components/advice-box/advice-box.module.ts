import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdviceBoxComponent } from './advice-box.component';



@NgModule({
  declarations: [
    AdviceBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdviceBoxComponent
  ]
})
export class AdviceBoxModule { }
