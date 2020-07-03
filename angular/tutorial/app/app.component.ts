import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

import { Todo, TodoService } from './todos.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle = '';
  loading = false;
  error = '';

  constructor(
    private todoService: TodoService,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    this.todoService.addTodo({
      title: this.todoTitle,
      completed: false,
      id: 0
    }).subscribe(todo => {
      this.todos.push(todo);
      this.todoTitle = '';
    });
  }

  fetchTodos() {
    this.loading = true;
    this.todoService.fetchTodos()
      .subscribe(todos => {
        this.todos = todos;
        this.loading = false;
      }, error => {
        // console.log('Error: ', error.message);
        this.error = error.message;
      });
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id != id);
      });
  }

  completeTodo(id: number) {
    this.todoService.completeTodo(id)
      .subscribe(todo => {
        this.todos.find(t => t.id === todo.id).completed = true
      });
  }
}