import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormBuilder } from '@angular/forms';

interface ITask {
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent {

  // DI example -> low coupling
  constructor(
    private todoService: TodoService,
  ) {

    this.form = {
      tasks: []
    }
  }


  form: {
    tasks: ITask[];
  };

  // output emitter

  ngOnInit() {
    // replace with asyncPipe
    this.todoService.taskList.subscribe(tasks => {
      this.form.tasks = tasks;
    })
  }

  onTaskMark(id: number) {
    this.todoService.markTask(id)
  }

  onTaskRemove(id: number) {
    this.todoService.removeTask(id)
  }
}
