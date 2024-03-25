import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
  @Input() task: any = {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(111, changes);
  }

  onSubmit() {
    console.log(123, this.task);
  }
}
