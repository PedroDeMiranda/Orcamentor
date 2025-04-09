import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
    
    public contatos: Array<Contato> = [
    {
      nome: 'João',
      telefone: '47 99568-8956',
      email: 'joao_do_grau@gmail.com'
    },
    {
      nome: 'Maria',
      telefone: '47 99588-8856',
      email: 'mariajulias@gmail.com'
    },
    {
      nome: 'Carlos',
      telefone: '47 91238-7452',
      email: 'carlosdo_apelao@gmail.com'
    }
  ]
}

export type Contato = {
  nome: string;
  telefone: string;
  email: string;
};