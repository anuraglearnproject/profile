import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  submitMsg: string = "This is a dummy form. I\'m working on it to make it functional.";
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
