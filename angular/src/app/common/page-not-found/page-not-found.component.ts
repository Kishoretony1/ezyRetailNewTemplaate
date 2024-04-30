import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(public auth : AuthService, private router : Router) { }

  ngOnInit(): void {
  }
  redirectToPage(){
     this.router.navigate([this.auth.isLoggedIn() ? 'dashboard': 'login']); 
  }
}
