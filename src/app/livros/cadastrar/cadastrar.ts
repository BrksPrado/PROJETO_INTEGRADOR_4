import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {

  valor = '0';

caminhoImagem = 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80';

  isDestaque = true;
  hasError = false;

  corDeFundo = 'grey';
  tamanhoFonte = 16;

  dizerOi(){
    this.valor = '1';
  }

  mostrarMensagem = false;

  toggleMensagem() {
    this.mostrarMensagem = !this.mostrarMensagem;
    this.isDestaque = !this.isDestaque;
    this.hasError = !this.hasError;
  }

  listaItens = ['Controle XBOX', 'Dell G15', 'PSP 3001'];

  alterarItens() {
    this.listaItens.push('Alienware NVX8');
  }


}
