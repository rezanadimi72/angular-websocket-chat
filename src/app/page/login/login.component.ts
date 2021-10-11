import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppService} from "../../services/app.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import {Login} from "../../models/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public loginForm: Login = {name: '', type: 'login'};
  public conn: any = null;


  constructor(private router: Router) {
    if (AppService.isLogin())
      this.router.navigate(['page/chat']);
    this.conn = new WebSocket(AppService.getWebsocketUrl());
  }

  ngOnInit(): void {


  }

  doLogin() {
    if (this.loginForm.name == '')
      Swal.fire('خطا', 'لطفا نام و نام خانواگی خود را وارد کنید', 'error');
    else {
      this.conn.send(JSON.stringify(this.loginForm));
      localStorage.setItem('loggedInUser', this.loginForm.name);
      this.router.navigate(['page/chat']);
    }
  }

}
