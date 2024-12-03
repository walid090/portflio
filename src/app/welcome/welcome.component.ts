import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent implements OnInit {
  constructor(private router: Router,private activatedRoute:ActivatedRoute) {}
  name:any;
  ngOnInit(): void {
    this.name=this.activatedRoute.snapshot.params["name"];
  }
}
