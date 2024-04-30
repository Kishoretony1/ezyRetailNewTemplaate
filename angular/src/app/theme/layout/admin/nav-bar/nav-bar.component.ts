// Angular Import
import { Component, EventEmitter, Output ,OnInit} from '@angular/core';
import { AuthService } from 'src/app/common/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  userName: any;
  outletName: any;
  userDetails:any;

  // public props
  menuClass = false;
  collapseStyle = 'none';
  windowWidth = window.innerWidth;

  constructor(private auth : AuthService) { }

  ngOnInit(): void {

    this.userName = this.auth.getUsername();
   this.outletName = this.auth.getOutletName();
   this.userDetails = this.auth.getUserDetails();

  }

  @Output() NavCollapse = new EventEmitter();
  @Output() NavCollapsedMob = new EventEmitter();

  // public method
  toggleMobOption() {
    this.menuClass = !this.menuClass;
    this.collapseStyle = this.menuClass ? 'block' : 'none';
  }

  navCollapse() {
    if (this.windowWidth >= 992) {
      this.NavCollapse.emit();
    }
  }
}
