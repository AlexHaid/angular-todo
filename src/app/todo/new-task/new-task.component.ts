import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  constructor(
    private formBuilder: FormBuilder
  ) {};
  taskForm = this.formBuilder.group({
    task: ['', Validators.required]
  })

  clear() {
    this.taskForm.setValue({
      task: 'kinda cleared'
    })
  }
  onSubmit() {
    console.log(111, this.taskForm.value)
  }
}
