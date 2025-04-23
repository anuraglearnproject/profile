import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { APP_CONSTANTS } from '../constants/constants'
import { FormsModule } from '@angular/forms';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../services/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule, NgbPopover],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anuragreview';
  search: string = "";
  searchSite: string = environment.isLocalhost 
  ? APP_CONSTANTS["localhost.SEARCH_SITE"]: APP_CONSTANTS["SEARCH_SITE"];

  searchSubmit(){
    const url = `${this.searchSite}?query=${this.search}`;
    console.log(url);
    window.open(url, "_blank");
  }
}
