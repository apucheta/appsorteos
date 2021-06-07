import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SorteaPageRoutingModule } from './sortea-routing.module';

import { SorteaPage } from './sortea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SorteaPageRoutingModule
  ],
  declarations: [SorteaPage]
})
export class SorteaPageModule {}
