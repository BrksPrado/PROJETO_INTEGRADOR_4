import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-component',
  standalone: false,
  templateUrl: './listar-component.html',
  styleUrl: './listar-component.css'
})
export class ListarComponent {

  usuarios = [
    { nome: 'Gustavo', cargo: 'Desenvolvedor' },
    { nome: 'Vinicius', cargo: 'Oragotango' },
    { nome: 'João Pedro', cargo: 'Estudante' },
    { nome: 'Jacare', cargo: 'Analista' }
  ]

}
