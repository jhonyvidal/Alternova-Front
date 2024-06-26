import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppointmentService } from '../../../services/appointment.service';
import { ConfigApiService } from '../../../services/config.sevice';

@Component({
  selector: 'app-create-modal',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule ],
  templateUrl: './create-modal.component.html',
  styleUrl: './create-modal.component.css',
})
export default class CreateModalComponent {
  //detect when submit is success
  @Output() formSubmitted = new EventEmitter<void>();

  doctorsList = signal<any[]>([]);
  typesList = signal<any[]>([]);
  isModalOpen = false;
  createForm: FormGroup;
  minDateTime: string = '';

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private ConfigService:ConfigApiService
  ) {
    this.createForm = this.fb.group({
      fechaHora: ['', [Validators.required]],
      comment: ['', [Validators.required]],
      doctorId:['',  [Validators.required]],
      typeAppointmentId:['',  [Validators.required]],
    });
  }

  ngOnInit(){
    this.getDoctors();
    this.getTypes();
    this.setMinDateTime();
  }

  setMinDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);
    this.minDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  isFieldInvalid(field: string): boolean {
    const control = this.createForm.get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  getDoctors(){
    this.ConfigService.GetDoctor()
      .subscribe((response) => {
        if (response) {
          this.doctorsList.set(response)
        } else {
          alert('Error de autenticación');
        }
      });
  }

  getTypes(){
    this.ConfigService.Gettype()
      .subscribe((response) => {
        if (response) {
          this.typesList.set(response)
        } else {
          alert('Error de autenticación');
        }
      });
  }


  onSubmit(event: Event) {
    event.preventDefault();
    if (this.createForm.valid) {
      this.appointmentService.Post(this.createForm.value)
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
}
