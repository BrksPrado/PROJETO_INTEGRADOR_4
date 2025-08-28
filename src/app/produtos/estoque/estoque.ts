import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {

  produtos = [
    { id: 1, nome: 'Notebook Dell G15', preco: 2500, estoque: 21 },
    { id: 2, nome: 'Mouse Logitech G209 LightSpeed', preco: 450, estoque: 0 },
    { id: 5, nome: 'Mesa com Regulagem de Altura', preco: 2350, estoque: 4 },
    { id: 3, nome: 'Monitor LG Ultra Gear', preco: 1699, estoque: 2 },
    { id: 4, nome: 'Teclado Mecânico Aula F75', preco: 300, estoque: 0 },
    
  ];

  aumentarPrecos() {
    this.produtos = this.produtos.map(p => ({ ...p, preco: +(p.preco * 1.1).toFixed(2) }));
  }

  diminuirPrecos() {
    this.produtos = this.produtos.map(p => ({ ...p, preco: +(p.preco * 0.9).toFixed(2) }));
  }
}
