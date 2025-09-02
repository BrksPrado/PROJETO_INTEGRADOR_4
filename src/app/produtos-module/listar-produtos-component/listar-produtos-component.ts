import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-produtos-component',
  standalone: false,
  templateUrl: './listar-produtos-component.html',
  styleUrl: './listar-produtos-component.css'
})
export class ListarProdutosComponent {

  produtos = [
    'Dell G15',
    'Logitech G29',
    'Aula F75',
    'Ultragear 240hz',
    'Razer Kraken'
  ];

}
