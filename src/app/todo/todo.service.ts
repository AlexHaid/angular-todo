import { EventEmitter, Inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

interface ITask {
  id: number,
  title: string,
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: ITask[] = [{
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  }]

  taskSubject = new Subject<ITask[]>();
  taskEvent = new EventEmitter<ITask>();

  public getTasks() {
    return this.tasks;
  }

  public addTask(title: string) {
    const lastId = this.tasks[this.tasks.length - 1]?.id || 0;
    const newTask: ITask = {
      id: lastId + 1,
      title,
      completed: false
    };
    this.tasks.push(newTask);
    this.taskSubject.next(this.tasks);
    this.taskEvent.emit(newTask)
  }
}
