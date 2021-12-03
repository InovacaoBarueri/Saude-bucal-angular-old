import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf5PageRoutingModule } from './pdf5-routing.module';

import { Pdf5Page } from './pdf5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf5PageRoutingModule
  ],
  declarations: [Pdf5Page]
})
export class Pdf5PageModule {}
