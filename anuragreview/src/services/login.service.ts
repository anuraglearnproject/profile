import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../models/login.dto';
import { LoginResponseDto } from '../models/login-response.dto';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginRequest(credentials: LoginDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(APP_CONSTANTS['localhost.API_BASE_URL'] + 'Login', credentials, {
      withCredentials: true
    });
  }
}
