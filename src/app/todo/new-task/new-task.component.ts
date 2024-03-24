import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {};
  taskForm = this.formBuilder.group({
    task: ['', Validators.required]
  })

  clear() {
    this.taskForm.setValue({
      task: ''
    })
  }

  onSubmit() {
    const { task } = this.taskForm.value;
    if (task) this.todoService.addTask(task);
    this.clear();
  }
}
