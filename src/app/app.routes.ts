import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortflioComponent } from './portflio/portflio.component';

export const routes: Routes = [
  { path: '', component: PortflioComponent },
  { path: 'login', component: LoginComponent },
];
