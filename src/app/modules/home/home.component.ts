import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import HeaderComponent from '../../shared/modules/header/header.component';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../services/models/appointment.model';
import CreateModalComponent from '../../shared/modals/create-modal/create-modal.component';
import DeleteModalComponent from '../../shared/modals/delete-modal/delete-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    CreateModalComponent,
    DeleteModalComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  dropdownOpen = false;
  appointmentList = signal<Appointment[]>([]);

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.getAppointment();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  getAppointment() {
    this.appointmentService.Get().subscribe((response) => {
      if (response) {
        this.appointmentList.set(response);
      } else {
        alert('Error de autenticación');
      }
    });
  }
}
