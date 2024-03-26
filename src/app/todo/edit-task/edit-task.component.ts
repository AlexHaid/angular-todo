import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import ITask from '../interfaces';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
  @Input() task: ITask = {
    id: 0,
    title: '',
    completed: false
  }
  @Output() submitTaskEvent = new EventEmitter<string>();

  onSubmit() {
    this.submitTaskEvent.emit('');
  }
}
