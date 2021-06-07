import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SorteaPage } from './sortea.page';

const routes: Routes = [
  {
    path: '',
    component: SorteaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SorteaPageRoutingModule {}
