import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';
import { Notifications } from 'app/shared/notifications.model';
import { NotificationsService } from 'app/shared/notifications.service';

@Component({
  selector: 'app-superadmin-navbar',
  templateUrl: './superadmin-navbar.component.html',
  styleUrls: ['./superadmin-navbar.component.scss']
})
export class SuperadminNavbarComponent implements OnInit {
  Mlist: Notifications[];
  constructor(private authService: AuthService,
    private msgService: NotificationsService
    ) { }

  ngOnInit() {
    this.msgService.getsupernotifications().subscribe(actionArray => {
      this.Mlist = actionArray.map(item => {
        const a: any = item.payload.doc.data();
        return a;
      })
  
  
  });
  }

}
