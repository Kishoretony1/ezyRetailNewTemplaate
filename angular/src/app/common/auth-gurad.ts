import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
    private myRoute: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let details = this.auth.getUserDetails();
    let userType = this.auth.getUserType();
    if (this.auth.isLoggedIn()) {
      if ((state.url == '/Inventory/addproduct' && !details.addProductInfo)
        || (state.url == '/Inventory/edit' && !details.modifyProductInfo) ||
        (state.url == '/Inventory/addpromotion' && !details.addPromotionInfo) || (userType == 'general' && 
        (state.url.startsWith('/Employees') || (state.url.startsWith('/devices')) || (state.url.startsWith('/Zones'))
        || (state.url.startsWith('/Settings')) || (state.url.startsWith('/OtherReports'))) 
        )){
        this.myRoute.navigate(["dashboard"]);
        return false
      } else {
        return true;
      }
    } else {
      this.myRoute.navigate(["login"]);
      return false;
    }
  }
}


