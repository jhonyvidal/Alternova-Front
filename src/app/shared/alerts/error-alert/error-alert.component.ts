import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-error-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-alert.component.html',
  styleUrl: './error-alert.component.css'
})
export default class ErrorAlertComponent {
  
  //when parent open the alert
  @Input() isOpen: boolean = false;
  @Input() text: string = "";

  //detect when alert is closed
  @Output() closed = new EventEmitter<void>();
  
  isModalOpen: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']) {
      this.isModalOpen = changes['isOpen'].currentValue;
    }
  }

  closeModal() {
    this.isModalOpen = false;
    this.closed.emit();
  }
}
