import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  // Properties
  messages: string[] = [];

  constructor() { }

  // Methods
  add(message: string) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }
}
