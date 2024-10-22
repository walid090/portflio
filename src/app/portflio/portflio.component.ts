import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portflio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portflio.component.html',
  styleUrl: './portflio.component.css'
})
export class PortflioComponent {

}
