import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf6PageRoutingModule } from './pdf6-routing.module';

import { Pdf6Page } from './pdf6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf6PageRoutingModule
  ],
  declarations: [Pdf6Page]
})
export class Pdf6PageModule {}
