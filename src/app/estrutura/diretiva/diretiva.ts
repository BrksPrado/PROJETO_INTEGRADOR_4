import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {

  alunos = [
    { idAluno: 1, nomeAluno: 'Gustavo', statusAluno: true },
    { idAluno: 2, nomeAluno: 'João', statusAluno: false },
    { idAluno: 3, nomeAluno: 'Vinicius', statusAluno: true }
  ];

  exibirLista = false;
  fontSize = 16;

  alterarAluno() {
    const aluno = this.alunos[0];
    aluno.nomeAluno = 'Novo Nome';
    aluno.statusAluno = !aluno.statusAluno;
  }

  toggleLista() {
    this.exibirLista = !this.exibirLista;
  }

  aumentarFonte() {
    this.fontSize += 2;
  }

  diminuirFonte() {
    if (this.fontSize > 8) this.fontSize -= 2;
  }
}