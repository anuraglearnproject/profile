import { Routes } from '@angular/router';
import { PageLoaderComponent } from '../components/page-loader/page-loader.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { environment } from '../services/environment'
import { LoginComponent } from '../components/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },   
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageLoaderComponent }

];
// Conditionally add the production route if not running in localhost
if (!environment.isLocalhost) {
    routes.push({ path: '/', redirectTo: '/home', pathMatch: 'full' });
  }

