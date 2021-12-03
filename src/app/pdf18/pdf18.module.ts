import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf18PageRoutingModule } from './pdf18-routing.module';

import { Pdf18Page } from './pdf18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf18PageRoutingModule
  ],
  declarations: [Pdf18Page]
})
export class Pdf18PageModule {}
