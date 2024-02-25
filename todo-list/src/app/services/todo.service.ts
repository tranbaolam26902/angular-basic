import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    todoItems: Array<Todo> = [];

    constructor() { }

    getItems(): Array<Todo> {
        return this.todoItems;
    }
    generateId(): number {
        return this.todoItems.length
            ? this.todoItems[this.todoItems.length - 1].id + 1
            : 1;
    }
    addItem(item: Todo): void {
        this.todoItems.push(item);
    }
    toggleItemStatus(id: number): void {
        this.todoItems.forEach((todoItem) => {
            if (todoItem.id === id)
                todoItem.isCompleted = !todoItem.isCompleted;
        });
    }
    removeItem(id: number): void {
        console.log(this.todoItems);
        this.todoItems = this.todoItems.filter(
            (todoItem) => todoItem.id !== id,
        );
        console.log(this.todoItems);
    }
}
