import { Routes } from '@angular/router';
import { PageLoaderComponent } from '../components/page-loader/page-loader.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';

export const routes: Routes = [
    { path: 'contact', component: ContactUsComponent },
    { path: '**', component: PageLoaderComponent }
];
