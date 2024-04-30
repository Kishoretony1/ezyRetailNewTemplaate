import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LoginService } from './login.service';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export default class SignInComponent {

  _success = new Subject<string>();
  successMessage: string | undefined;
  username: string = "";
  password: string = "";
  logindetail = {};
  hide: any;
  rememberuname : false | undefined;

  constructor(private loginService : LoginService, private route: Router) {
  }

  ngOnInit(): void {
    if(localStorage.getItem("access_token")){
      this.route.navigateByUrl('/dashboard');
    }
    this._success.subscribe(message => (this.successMessage = message));
    this._success
      .pipe(debounceTime(70000))
      .subscribe(() => (this.successMessage = ''));
  }
  login() {
    if (this.username == "" && this.password == "") {
      alert("Username/Password is Required");
    } else if (this.username != "" && this.password == "") {
      alert("Enter your password");
    } else if (this.username == "" && this.password != "") {
      alert("Enter your username");
    } else if (this.username != "" && this.password != "") {
      // this.loader.display(true);
      this.loginService.postlogin(this.username, this.password).subscribe(
        (data:any) => {
          this.route.navigateByUrl('dashboard/analytics');
          localStorage.setItem("LoggedInUser",this.username);
          localStorage.setItem("userName",data.userName);
          localStorage.setItem("access_token",data.token);
          localStorage.setItem('userId',data.userId);
          localStorage.setItem("userDetails",JSON.stringify(data));
          localStorage.setItem("id_user",JSON.stringify({outletId : data.outletId,merchantId: data.merchantId, userRoleId : data.userRoleId}))
          localStorage.setItem("outletName",data.outletName);
        },
        error => {
          if (error.status === 401 || error.status === 400) {
            alert("Unauthorized Username and Password")
            this._success.next("Unauthorized Username and Password");

          }
        }
      );
    }
  }
}
