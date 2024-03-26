import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent {
  @Input() title: string = '';
  @Input() completed: boolean = false;
  @Input() id: number = 0;
  @Output() titleChange = new EventEmitter<string>();

  onChange(value: string) {
    this.titleChange.emit(value)
  }
}
