import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskItemComponent } from './task-item/task-item.component';

@NgModule({
  declarations: [
    TodoComponent,
    NewTaskComponent,
    TaskListComponent,
    EditTaskComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    TodoComponent
  ]
})
export class TodoModule { }
