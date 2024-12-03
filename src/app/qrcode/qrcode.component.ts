import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-qrcode',
  standalone: true,
  imports: [ CommonModule, FormsModule,QRCodeModule],
  templateUrl: './qrcode.component.html',
  styleUrl: './qrcode.component.css'
})
export class QrcodeComponent {
  textToEncode: string = '';

}
