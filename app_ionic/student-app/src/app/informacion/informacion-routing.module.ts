import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionPage } from './informacion.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformacionPageRoutingModule {}
