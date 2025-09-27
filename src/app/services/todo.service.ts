import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com';

  private http = inject(HttpClient);

  getTodos() : Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/todos`)
    .pipe(
      retry(3),
    catchError(this.handleError) 
    )
  }

  private handleError(error: HttpErrorResponse):Observable<never> {
    let errorMessage = 'Ha ocurrido un error desconocido';
    
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error del cliente: ${error.error.message}`;
    } else {
      // Error del servidor
      errorMessage = `Error del servidor: ${error.status} - ${error.message}`;
    }
    
    console.error('Error HTTP:', error);
    return throwError(() => new Error(errorMessage));
  }

  
}
