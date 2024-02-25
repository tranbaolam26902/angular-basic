import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent {
    @Input() color: string = '';
    @Input() text: string = '';
    @Output() btnClick = new EventEmitter();

    onClick() {
        this.btnClick.emit();
    }
}
