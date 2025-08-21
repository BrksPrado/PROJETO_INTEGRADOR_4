import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Somar } from './somar/somar';

const routes: Routes = [
  {
    path: 'somar',
    component: Somar
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContadorRoutingModule { }
