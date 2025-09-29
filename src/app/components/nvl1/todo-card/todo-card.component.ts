import { Component, input } from '@angular/core';
import { Todo } from '../../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-card',
  templateUrl: 'todo-card.component.html',
  styleUrls: ['todo-card.component.css']
})
export class TodoCardComponent { 
  // ✅ OBLIGATORIO - input() para recibir datos del padre
     user = input.required<Todo>();
}
