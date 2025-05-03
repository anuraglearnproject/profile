import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../models/login.dto';
import { LoginResponseDto } from '../models/login-response.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly apiUrl = 'http://localhost:5243/api/login';

  constructor(private http: HttpClient) { }

  loginRequest(credentials: LoginDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(this.apiUrl, credentials, {
      withCredentials: true
    });
  }
}
