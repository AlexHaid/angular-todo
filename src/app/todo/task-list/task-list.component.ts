import { Component } from '@angular/core';
import ITask from '../interfaces';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent {

  constructor(
    public todoService: TodoService,
  ) {}
  
  public currentTask = {
    title: '',
    id: 0,
    completed: false
  };

  onTaskMark(id: number) {
    this.todoService.markTask(id)
  }

  onTaskRemove(id: number) {
    this.todoService.removeTask(id)
  }

  submitTask() {
    this.currentTask = {
      title: '',
      id: 0,
      completed: false
    }
  }

  onTaskEdit(task: ITask) {
    this.currentTask = task;
  }
}
