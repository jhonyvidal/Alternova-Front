import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-create-modal',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule ],
  templateUrl: './create-modal.component.html',
  styleUrl: './create-modal.component.css',
})
export default class CreateModalComponent {
  @Output() formSubmitted = new EventEmitter<void>();
  isModalOpen = false;
  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService
  ) {
    this.createForm = this.fb.group({
      fechaHora: ['', [Validators.required]],
      comment: ['', [Validators.required]],
    });
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  isFieldInvalid(field: string): boolean {
    const control = this.createForm.get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.createForm.valid) {
      this.appointmentService.Post(this.createForm.value)
      .subscribe((response) => {
        if (response) {
         console.log(response);
         this.isModalOpen = false;
         this.formSubmitted.emit(); 
        } else {
          alert('Error de autenticación');
        }
      });
    }
  }
}
