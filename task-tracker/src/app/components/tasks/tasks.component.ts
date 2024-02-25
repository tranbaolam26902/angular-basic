import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [CommonModule, TaskItemComponent, AddTaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
    tasks: Array<Task> = [];

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        this.taskService.getTasks().subscribe((tasks) => {
            this.tasks = tasks;
        });
    }

    handleDeleteTask(task: Task): void {
        this.taskService.deleteTask(task).subscribe(() => {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        });
    }
    handleToggleReminder(task: Task): void {
        task.reminder = !task.reminder;
        this.taskService.updateTaskReminder(task).subscribe();
    }
    handleAddTask(task: Task) {
        this.taskService.addTask(task).subscribe((task) => {
            this.tasks.push(task);
        });
    }
}
