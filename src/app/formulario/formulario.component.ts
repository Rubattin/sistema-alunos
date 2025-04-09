import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nome: string = '';

  constructor(private alunoService: AlunoService) {}

  salvar(): void {
    if (this.nome.trim()) {
      this.alunoService.adicionar(this.nome);
      this.nome = '';
    }
  }
}
