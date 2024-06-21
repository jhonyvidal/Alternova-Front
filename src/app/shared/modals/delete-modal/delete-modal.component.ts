import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export default class DeleteModalComponent {
  @Output() formSubmitted = new EventEmitter<void>();
  @Input() id:number = 0;
  isModalOpen = false;
  constructor(private appointmentService: AppointmentService){}

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  onClick() {
    this.appointmentService.Delete(this.id)
    .subscribe((response) => {
      if (response) {
        this.isModalOpen = false;
        this.formSubmitted.emit(); 
      } else {
        alert('Error de autenticación');
      }
    });
  }
}
