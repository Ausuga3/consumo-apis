import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoListComponent } from "../../components/nvl1/todo-list/todo-list.component";

@Component({
  selector: 'app-api-nvl1',
  imports: [TodoListComponent],
  templateUrl: './api-nvl1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ApiNvl1Component { }
