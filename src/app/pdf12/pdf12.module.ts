import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf12PageRoutingModule } from './pdf12-routing.module';

import { Pdf12Page } from './pdf12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf12PageRoutingModule
  ],
  declarations: [Pdf12Page]
})
export class Pdf12PageModule {}
