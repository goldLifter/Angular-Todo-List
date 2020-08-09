import { Component, OnInit } from '@angular/core';
import {TodosService} from '../shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private loading: boolean = true;
  private search: string = '';

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.fetchTodos().subscribe(() => {
      this.loading = false;
    });
  }

  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  removeId(id: number) {
    this.todosService.removeId(id);
  }
}
