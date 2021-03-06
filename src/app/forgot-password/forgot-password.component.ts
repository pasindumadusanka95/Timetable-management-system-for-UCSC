import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  getUrl() {
    // tslint:disable-next-line: max-line-length
        return 'url(\'../../assets/img/test/background1t.jpg\')';
      }

}
