import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos: string[] = [];

  getAlunos(): string[] {
    return this.alunos;
  }

  adicionar(nome: string): void {
    this.alunos.push(nome);
  }

  limpar(): void {
    this.alunos = [];
  }
}
