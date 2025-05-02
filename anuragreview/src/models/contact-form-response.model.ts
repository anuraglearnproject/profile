import { ContactForm } from "./contact-form.model";

export interface ContactFormResponse extends ContactForm {
    id: string;
  date: string; 
}
