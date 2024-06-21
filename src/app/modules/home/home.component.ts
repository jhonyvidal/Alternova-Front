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
    FormatDate,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  dropdownOpen = false;
  appointmentList = signal<Appointment[]>([]);
  appointments: Appointment[] = [];
  totalItems: number = 10;
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.getAppointment();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  getAppointment(pageNumber?: number, pageSize?: number) {
    this.appointmentService.Get(pageNumber, pageSize).subscribe((response) => {
      if (response) {
        this.appointmentList.set(response.data);
        this.totalItems = response.totalCount;
        this.pageSize = response.pageSize;
        this.currentPage = response.currentPage;
      } else {
        alert('Error de autenticación');
      }
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getAppointment(page, this.pageSize);
  }

  calculateStartIndex(): number { 
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  calculateEndIndex(): number {
    const end = this.currentPage * this.pageSize;
    return end > this.totalItems ? this.totalItems : end;
  }
}
