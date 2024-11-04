import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emprestimo } from '../../models/emprestimo.model';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  private apiUrl = 'http://localhost:8080/biblioteca/emprestimo';

  constructor(private http: HttpClient) {}

  realizarEmprestimo(emprestimo: Emprestimo): Observable<Emprestimo> {
    return this.http.post<Emprestimo>(`${this.apiUrl}/realizar`, emprestimo);
  }

  atualizarEmprestimo(id: number, emprestimo: Emprestimo): Observable<Emprestimo> {
    return this.http.put<Emprestimo>(`${this.apiUrl}/atualizar/${id}`, emprestimo);
  }

  listarEmprestimos(): Observable<Emprestimo[]> {
    return this.http.get<Emprestimo[]>(`${this.apiUrl}`);
  }

  devolverEmprestimo(id: number): Observable<Emprestimo> {
    return this.http.post<Emprestimo>(`${this.apiUrl}/devolver/${id}`, null);
  }

  getEmprestimoById(id: number): Observable<Emprestimo> {
    return this.http.get<Emprestimo>(`${this.apiUrl}/localizar/${id}`);
  }

  deletarEmprestimo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletar/${id}`);
  }
}