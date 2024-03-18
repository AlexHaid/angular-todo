import { Component, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from '../todo.service';

interface Task {
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
// export class TaskListComponent {
//   constructor(
//     private todoService: TodoService
//   ) {
//     this.subscription = this.todoService.tasks$.subscribe(tasks => this.tasks = tasks);
//   }

//   tasks: Task[] = [];
//   subscription: Subscription;

//   ngOnInit() {
//     // this.data.tasks.subscribe(tasks => this.tasks = tasks);
//   }
// }

export class TaskListComponent {
  tasks: any[] = [];

  constructor(private todoService: TodoService) {
    this.todoService.taskSubject.subscribe(tasks => this.tasks = tasks);
  }

  ngOnInit() {
    this.tasks = this.todoService.getTasks();
  }
}
