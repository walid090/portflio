import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PortflioComponent } from "./portflio/portflio.component";
import { LoginComponent } from "./login/login.component";
import { QrcodeComponent } from "./qrcode/qrcode.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PortflioComponent, LoginComponent, QrcodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fist-project';
}
