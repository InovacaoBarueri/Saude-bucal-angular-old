import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf16PageRoutingModule } from './pdf16-routing.module';

import { Pdf16Page } from './pdf16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf16PageRoutingModule
  ],
  declarations: [Pdf16Page]
})
export class Pdf16PageModule {}
