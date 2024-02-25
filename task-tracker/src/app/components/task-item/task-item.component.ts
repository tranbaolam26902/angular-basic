import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-task-item',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './task-item.component.html',
    styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
    @Input() task!: Task;
    @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
    @Output() toggleReminder: EventEmitter<Task> = new EventEmitter();
    faTimes = faTimes;

    onToggle(task: Task): void {
        this.toggleReminder.emit(task);
    }
    onDelete(task: Task): void {
        this.deleteTask.emit(task);
    }
}
