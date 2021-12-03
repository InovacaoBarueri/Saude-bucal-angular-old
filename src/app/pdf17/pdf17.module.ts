import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf17PageRoutingModule } from './pdf17-routing.module';

import { Pdf17Page } from './pdf17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf17PageRoutingModule
  ],
  declarations: [Pdf17Page]
})
export class Pdf17PageModule {}
