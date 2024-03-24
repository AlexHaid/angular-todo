import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ITask from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: ITask[] = [
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": true
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
    }
]

  taskSubject = new BehaviorSubject<ITask[]>(this.tasks);
  taskList = this.taskSubject.asObservable();

  public addTask(title: string) {
    const lastId = this.tasks[this.tasks.length - 1]?.id || 0;
    const newTask: ITask = {
      id: lastId + 1,
      title,
      completed: false
    };

    this.tasks.push(newTask);
    this.taskSubject.next(this.tasks);
  }

  public markTask(id: number) {
    this.tasks.map(task => {
      if (task.id === id) task.completed = !task.completed;
      return task;
    })

    this.taskSubject.next(this.tasks);
  }

  // private method to do with BS

  public removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    
    this.taskSubject.next(this.tasks)
  }
}
