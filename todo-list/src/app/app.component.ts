import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoService } from './services/todo.service';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Todo } from './models/todo';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    todoItems: Array<Todo> = [];
    todoForm = new FormGroup({
        title: new FormControl('', Validators.required),
    });

    constructor(private todoService: TodoService) {
        this.todoItems = this.todoService.getItems();
    }

    handleSubmit(title: HTMLInputElement) {
        this.todoService.addItem({
            id: this.todoService.generateId(),
            title: this.todoForm.value.title!,
            isCompleted: false,
        });
        this.todoItems = this.todoService.getItems();
        this.todoForm.reset();
        title.focus();
    }
    handleChange(id: number) {
        this.todoService.toggleItemStatus(id);
    }
    handleRemove(id: number) {
        this.todoService.removeItem(id);
        this.todoItems = this.todoService.getItems();
    }
}
