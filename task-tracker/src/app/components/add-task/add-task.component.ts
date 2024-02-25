import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-add-task',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './add-task.component.html',
    styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
    showAddTask: boolean = false;
    subscription!: Subscription;

    text: string = '';
    day: string = '';
    reminder: boolean = false;

    @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

    constructor(private uiService: UiService) {
        this.subscription = this.uiService.onToggle().subscribe((value) => {
            this.showAddTask = value;
        });
    }

    handleSubmit() {
        if (!this.text.trim()) {
            alert('Please add a task.');
            return;
        }

        const newTask = {
            text: this.text,
            day: this.day,
            reminder: this.reminder,
        };

        this.onAddTask.emit(newTask);

        this.text = '';
        this.day = '';
        this.reminder = false;
    }
}
