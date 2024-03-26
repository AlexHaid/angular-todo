import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import ITask from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() {
    this.fetchTasks();
  }

  private http = inject(HttpClient);
  private _tasks = new BehaviorSubject<ITask[]>([]);

  private _addTask(task: ITask) {
    const tasks = this._tasks.getValue();
    tasks.push(task);
    this._tasks.next(tasks);
  }

  private _markTask(id: number) {
    const tasks = this._tasks.getValue();
    tasks.map(task => {
      if (task.id === id) task.completed = !task.completed;
      return task;
    });
    this._tasks.next(tasks);
  }

  private _removeTask(id: number) {
    const tasks = this._tasks.getValue().filter(task => task.id !== id);
    this._tasks.next(tasks)
  }

  private fetchTasks() {
    this.http.get<ITask[]>(`https://jsonplaceholder.typicode.com/todos?userId=1`)
      .subscribe({
        next: res => {
          this._tasks.next(res);
        } 
      });
  }

  public get tasks(): Observable<ITask[]> {
    return new Observable(fn => this._tasks.subscribe(fn));
  }

  public addTask(title: string) {
    const id = Math.round(Math.random() * 1000000);
    const newTask: ITask = {
      id,
      title,
      completed: false
    };
    return this._addTask(newTask);
  }

  public markTask(id: number) {
    this._markTask(id);
  }

  public removeTask(id: number) {
    this._removeTask(id)
  }
}
