import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortflioComponent } from './portflio/portflio.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QrcodeComponent } from './qrcode/qrcode.component';

export const routes: Routes = [
  { path: '', component: PortflioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'qrcode', component: QrcodeComponent },
  { path: 'welcome/:name', component: WelcomeComponent },
];
