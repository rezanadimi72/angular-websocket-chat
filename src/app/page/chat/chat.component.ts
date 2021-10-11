import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "../../services/app.service";
import {webSocket} from "rxjs/webSocket";
import {Login} from "../../models/login";
import {PushNotificationsService} from "ng-push";
import {Message} from "../../models/message";
import Swal from "sweetalert2";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  encapsulation: ViewEncapsulation.Emulated,

})
export class ChatComponent implements OnInit {
  public myName: string = '1';
  public conn = new WebSocket(AppService.getWebsocketUrl());
  public loginForm: Login = {name: '', type: 'login'};
  public sendMessageModel: Message = {type: 'message', data: {from: '', to: '', message: ''}};
  public onlineUsers = [];
  public messages: any[] = [];
  public newMessageFrom = "";
  public toUser = "";
  public writeMessage = "";

  constructor(private router: Router) {

    // چک کن که اگر لاگین نیست به صفحه لاگین هدایت شود
    if (!AppService.isLogin()) {
      this.router.navigate(['page/login']);
    }
  }

  onConnection(ws: any) {
    console.log(ws);
  }

  logout() {
    Swal.fire({
      title: 'آیا مطمئن هستید؟',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'بله',
      denyButtonText: `خیر`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if (AppService.logout()) {
          this.conn.close();
          this.router.navigate(['page/login']);
        }
      } else if (result.isDenied) {
        Swal.close();
      }
    })

  }

  onMessage(message: any) {
    console.log(message);
    let data = JSON.parse(message.data);
    switch (data.type) {
      case "onlineUsers":
        this.onlineUsers = data.onlineUsers;
        break;
      case "message":
        this.messages.push(data.data);
        this.newMessageFrom = data.data.from;
        break;
    }
  }

  selectUser(user: any) {
    this.toUser = user;
  }

  OnError(error: any) {
    console.log(1);
    console.log(error);
  }

  sendMessage(message: string) {
    if (message != '') {
      this.sendMessageModel.data.message = message;
      this.sendMessageModel.data.to = this.toUser;
      this.messages.push(this.sendMessageModel.data);
      this.conn.send(JSON.stringify(this.sendMessageModel));
      let _THIS = this;
      setTimeout(function () {
        _THIS.writeMessage = '';
      }, 100);
    }
  }

  onClose(close: any) {
    console.log('close');
  }

  ngOnInit(): void {
    this.myName = <string>AppService.getMyName();
    this.sendMessageModel.data.from = <string>AppService.getMyName();
    this.loginForm.name = <string>this.myName;
    let _THIS = this;
    setTimeout(function () {
      _THIS.conn.send(JSON.stringify(_THIS.loginForm));
      _THIS.conn.onmessage = (messagem) => {
        _THIS.onMessage(messagem);
      }
      _THIS.conn.onerror = (error) => {
        _THIS.OnError(error);
      }
      _THIS.conn.onclose = (close) => {
        _THIS.onClose(close);
      }
    }, 1000);

  }

}
