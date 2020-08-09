import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Todo {
    id: number;
    title: string;
    complete: boolean;
    date?: any;
}

@Injectable({providedIn: 'root'})
export class TodosService {
  public todos: Todo[] = [];

constructor(private http: HttpClient) {}

    fetchTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .pipe(tap(todos => this.todos = todos));
    }

    // tslint:disable-next-line:typedef
    onToggle(id: number) {
        const idx = this.todos.findIndex(t => t.id === id);
        this.todos[idx].complete = !this.todos[idx].complete;
    }

    removeId(id: number) {
        this.todos = this.todos.filter(t => t.id !== id);
    }

    addTask(todo: Todo) {
        this.todos.push(todo);
    }
}
