import { Routes } from '@angular/router';
import { PageLoaderComponent } from '../components/page-loader/page-loader.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageLoaderComponent }
];
