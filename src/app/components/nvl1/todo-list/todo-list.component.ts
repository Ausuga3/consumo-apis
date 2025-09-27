import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { Todo } from '../../../interfaces/todo.interface';
import { TodoCardComponent } from '../todo-card/todo-card.component';

@Component({
  selector: 'app-todo-list',
  imports: [TodoCardComponent],
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit { 
  // ✅ OBLIGATORIO - Estado para guardar los datos
  todos = signal<Todo[]>([]);
  
  // ✅ OBLIGATORIO - Inyección del servicio
  private todoService = inject(TodoService);

  // ✅ OBLIGATORIO - Cargar datos al inicializar
  ngOnInit(): void {
    this.loadTodo();
  }

  // ✅ OBLIGATORIO - Método que obtiene datos del API
  loadTodo(): void {
    this.todoService.getTodos().subscribe({
      next: (todos: Todo[]) => {
        this.todos.set(todos);
        console.log('✅ TODOs cargados:', todos);
      },
      error: (err) => console.error('❌ Error:', err)
    });
  }
}
