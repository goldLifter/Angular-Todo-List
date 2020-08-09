import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  title = '';

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  addTask() {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      complete: false,
      date: new Date()
    };

    if (this.title.trim() !== ''){
      this.todosService.addTask(todo);
      this.title = '';
    }
  }

}
