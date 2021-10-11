import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  /**
   * @description تابع چک کردن وضعیت لاگین کاربر
   * @author Reza Nadimi
   * @return Boolean
   */
  static isLogin(): boolean {
    let userIsLogedIn = localStorage.getItem('loggedInUser');
    if (userIsLogedIn == null || userIsLogedIn == '') {
      return false;
    } else {
      return true;
    }
  }

  static getMyName() {
    return localStorage.getItem('loggedInUser');
  }

  static getWebsocketUrl() {
    return 'ws://localhost:8080/realtime_chat/bin/chat-server.php';
  }

  static logout(): boolean {
    try {
      localStorage.removeItem('loggedInUser');
      return true;
    } catch (e) {
      return false;
    }
  }
}
