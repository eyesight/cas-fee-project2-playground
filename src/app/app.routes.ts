import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './00_login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './_guards/auth.guards';
import { RegistrationComponent } from './01_registration/registration.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent, data: { title: 'Login' }},
  { path: 'registration', component: RegistrationComponent, data: { title: 'Registration' }},
  { path: 'home', component: HomeComponent, data: { title: 'Home' }, canActivate: [AuthGuard]},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
