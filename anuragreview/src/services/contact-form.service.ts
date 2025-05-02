import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactForm } from '../models/contact-form.model';
import { ContactFormResponse } from '../models/contact-form-response.model';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  // private apiUrl = environment.isLocalhost ? 'http://localhost:5243/api/ContactFormRequest':
  //  'https://anuragreview.bsite.net/api/ContactFormRequest'; 
  private apiUrl = 'https://anuragreview.bsite.net/api/ContactFormRequest'; 
  constructor(private http: HttpClient) {}

  submitContactForm(dto: ContactForm): Observable<ContactFormResponse> {
    return this.http.post<ContactFormResponse>(this.apiUrl, dto)
      .pipe(catchError(this.handleError));
  }

  getContactForm(idOrEmail: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/${idOrEmail}`)
      .pipe(catchError(this.handleError));
  }

  getAllContactForms(): Observable<ContactFormResponse[]> {
    return this.http.get<ContactFormResponse[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    return throwError(() => new Error('An error occurred while processing the request.'));
  }
}
