import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactFormService } from '../../services/contact-form.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  @ViewChild('submitModal') submitModal!: TemplateRef<any>;
  loading: string = "";
  submitMsg: string = "This is a dummy form. I\'m working on it to make it functional.";
  name: string = "";
  contactForm: FormGroup;
  callContactService: ContactFormService;
  constructor(private fb: FormBuilder,
    private contactService: ContactFormService,
    private modalService: NgbModal) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      //contact: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
    this.callContactService = contactService;
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.name = this.contactForm.get('name')?.value;
    this.loading = "loading";

    this.contactService.submitContactForm(this.contactForm.value).subscribe({
      next: (response) => {
        const success = Boolean(response) === true;

        this.submitMsg = success
          ? "Thank you for submitting the form. We will connect with you."
          : "There was a problem processing your request. Please try again later.";
       setTimeout(() => this.showSubmitModal(success), 1000); 
      },
      error: (error) => {
        console.error(error);
        this.submitMsg = "An unexpected error occurred. Please try again later.";
        setTimeout(() => this.showSubmitModal(false), 1000);
      }
    });
  }

  showSubmitModal(clearName: boolean = false) {
    this.loading = "";
    if (clearName) {
      console.log(clearName == true);
      this.contactForm.reset();
      this.contactForm.markAsUntouched();
    }
    this.modalService.open(this.submitModal).result.then(() => {
      if (clearName) {
        this.clearNameOnModalClose();
      }
    });
    
    let el = document.activeElement as HTMLElement;
    if (el) {
      el.blur();
    }
  }
  
  clearNameOnModalClose() {
    this.name = "";
  }

}
