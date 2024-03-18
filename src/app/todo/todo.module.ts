import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    TodoComponent,
    NewTaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  // providers: [Observable],
  exports: [
    TodoComponent
  ]
})
export class TodoModule { }
