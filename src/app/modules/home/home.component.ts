import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import HeaderComponent from '../../shared/modules/header/header.component';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../services/models/appointment.model';
import CreateModalComponent from '../../shared/modals/create-modal/create-modal.component';
import DeleteModalComponent from '../../shared/modals/delete-modal/delete-modal.component';
import { FormatDate } from '../../shared/pipes/formatDate';
import PaginationComponent from '../../shared/modules/pagination/pagination.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    CreateModalComponent,
    DeleteModalComponent,
    PaginationComponent,
    FormatDate
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  dropdownOpen = false;
  appointmentList = signal<Appointment[]>([]);
  appointments: Appointment[] = [];
  totalItems: number = 50;
  currentPage: number = 1;
  pageSize: number = 10;

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

  onPageChange(page: number): void {
    this.currentPage = page;
    // this.getAppointment();
  }
}
