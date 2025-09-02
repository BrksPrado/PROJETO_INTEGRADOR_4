import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosModuleRoutingModule } from './produtos-module-routing-module';
import { ListarProdutosComponent } from './listar-produtos-component/listar-produtos-component';
import { SharedModuleModule } from '../shared-module/shared-module-module';


@NgModule({
  declarations: [
    ListarProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosModuleRoutingModule,
    SharedModuleModule
  ],
  exports: [
    ListarProdutosComponent
  ]
})
export class ProdutosModuleModule { }
