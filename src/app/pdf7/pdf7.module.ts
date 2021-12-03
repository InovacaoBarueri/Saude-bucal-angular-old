import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf7PageRoutingModule } from './pdf7-routing.module';

import { Pdf7Page } from './pdf7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf7PageRoutingModule
  ],
  declarations: [Pdf7Page]
})
export class Pdf7PageModule {}
