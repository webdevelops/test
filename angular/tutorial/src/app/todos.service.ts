import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { delay, catchError, map, tap } from 'rxjs/operators';

export interface Todo {
  completed: boolean,
  title: string,
  id: number
};

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient) { }

  addTodo(todo: Todo): Observable<Todo> {
    const headers = new HttpHeaders({
      'MyCustomeHeader': Math.random().toString(),
      '1111111111': 'aaaaaaaaaa'
    });

    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, { headers })
  }

  fetchTodos(): Observable<Todo[]> {
    // const params = new HttpParams().set('_limit', '2');
    let params = new HttpParams();
    params = params.append('_limit', '3');
    params = params.append('custome', 'anything');

    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      params,
      observe: 'response'
    })
      .pipe(
        map(response => {
          // console.log('Response: ', response);
          return response.body;
        }),
        delay(500),
        catchError(error => {
          // console.log('Error2: ', error.message);
          return throwError(error);
        })
      )
  }

  removeTodo(id: number): Observable<any> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      observe: 'events'
    }).pipe(
      tap(event => {
        if (event.type === HttpEventType.Sent) {
          console.log('Sent', event);
        }

        if (event.type === HttpEventType.Response) {
          console.log('Response', event);
        }
      })
    ); 
  }

  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    },
      {
        responseType: 'json'
      })
  }
}