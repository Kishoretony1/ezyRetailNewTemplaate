import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  breadCrumbs: any;
  uname: any;
  currrencystandalone: string | undefined;
  constructor(private router: Router, private myRoute: Router) { }
  sendToken(token: string) {
    localStorage.setItem("access_token", token)
  }
  getToken() {
    // if(this.router.url.startsWith('/invoice/')){
    //   return true
    // }
    return localStorage.getItem("access_token")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    alert("hiii");
    // this.dialog.closeAll();
    localStorage.clear();;
    this.myRoute.navigate([""]);
  }
  setBreadCrumbs(data: any) {
    this.breadCrumbs = data;
  }
  getBreadCrumbs() {
    return this.breadCrumbs
  }

  getUsername() {
    return localStorage.getItem("userName");
  }
  getUserMail() {
    return localStorage.getItem('LoggedInUser')?.toLowerCase();
  }
  getUserDetails() {
    let details = localStorage.getItem('userDetails');
    return JSON.parse(String(details));
  }
  getUserId() {
    return localStorage.getItem('userId');
  }

  getOutletName() {
    return localStorage.getItem('outletName');
  }
  getAdminType() {
    let details = localStorage.getItem('userDetails');
    let data = JSON.parse(String(details));
    return data?.userType.toLowerCase() == 'superadmin';
  }
  getCurrency() {
    if (this.currrencystandalone) {
      return this.currrencystandalone
    } else {
      let details = this.getUserDetails();
      let currency = details && details.outlet && details.outlet.currency ? details.outlet.currency : "MYR";
      return currency;
    }
  }
  setCurrency(currency: string) {
    this.currrencystandalone = currency;
    this.getCurrency();
    this.getCurrencyStandalone();
  }
  getCurrencyStandalone() {
    return this.currrencystandalone ? this.currrencystandalone : "THB";
  }
  getUserType() {
    let details = localStorage.getItem('userDetails');
    let data = JSON.parse(String(details));
    return data?.userType.toLowerCase();
  }
}
