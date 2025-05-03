import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import { APP_CONSTANTS } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {
  private currentUrl = new BehaviorSubject<string>('');
  currentUrl$ = this.currentUrl.asObservable();
  constructor(private router: Router, private http: HttpClient) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentUrl.next(event.urlAfterRedirects);
      })
  }

  loadData() {
    this.http.post(APP_CONSTANTS['localhost.API_BASE_URL'] + "Login/CheckForm", null, {
      withCredentials: true
    }).subscribe({
      next: x => console.log('data:', x),
      error: e => console.log('error:', e)
    })
  }
}
