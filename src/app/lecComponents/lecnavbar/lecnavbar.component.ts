import { Lecturer } from './../../shared/lecturer.model';
import { Component, OnInit, ElementRef } from '@angular/core';
import {  Router } from '@angular/router';
import { ROUTES } from '../lecsidebar/lecsidebar.component';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import { AuthService } from 'app/core/auth.service';
import { Notifications } from 'app/shared/notifications.model';
import { NotificationsService } from 'app/shared/notifications.service';
import { LecProfileService } from 'app/shared/lec-profile.service';
import { User } from 'app/core/user';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lecnavbar',
  templateUrl: './lecnavbar.component.html',
  styleUrls: ['./lecnavbar.component.scss']
})
export class LecnavbarComponent implements OnInit {
  Mlist: Notifications[];
  private listTitles: any[];
  location: Location;
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;
  lecturer: Lecturer[];
  user: User;
  closeResult: string;
  body: string;
  sub: string;
  data: any;
  status: string;
  sbody: any;

  constructor(public  authService:  AuthService,
              location: Location,
              private element: ElementRef,
              private router: Router,
              private msgService: NotificationsService,
              public service: LecProfileService,
              public modalService: NgbModal,
     ) {
    this.location = location;
        this.sidebarVisible = false;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    this.router.events.subscribe((event) => {
      this.sidebarClose();
       let $layer: any = document.getElementsByClassName('close-layer')[0];
       if ($layer) {
         $layer.remove();
         this.mobile_menu_visible = 0;
       }
    });

    this.msgService.getlecnotifications().subscribe(actionArray => {
    this.Mlist = actionArray.map(item => {
      const a: any = item.payload.doc.data();
      a[4] = item.payload.doc.id;
      return a;
    })


    });

    this.authService.getUser().subscribe( user => {
      if (user) {
      this.user = user;
      }
      console.log(this.user.email);
    });

    this.service.getLecturers().subscribe(actionArray => {
    this.lecturer = actionArray.map(item => {
    return {
      id: item.payload.doc.id,
      ...item.payload.doc.data()
    } as Lecturer;

    })
    });

  }

  getLecturer() {
    for (const l of this.lecturer) {
    // tslint:disable-next-line: triple-equals
        if (l.email == this.user.email) {
            localStorage.setItem('curLec', JSON.stringify(l));
            return l;
        }
    }
  }

  profile() {
    this.router.navigate(['/lecturerprofile']);
  }

  sidebarOpen() {
      const toggleButton = this.toggleButton;
      const body = document.getElementsByTagName('body')[0];
      setTimeout(function() {
          toggleButton.classList.add('toggled');
      }, 500);

      body.classList.add('nav-open');

      this.sidebarVisible = true;
  };
  sidebarClose() {
      const body = document.getElementsByTagName('body')[0];
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
  };
  sidebarToggle() {
      // const toggleButton = this.toggleButton;
      // const body = document.getElementsByTagName('body')[0];
      let $toggle = document.getElementsByClassName('navbar-toggler')[0];

      if (this.sidebarVisible === false) {
          this.sidebarOpen();
      } else {
          this.sidebarClose();
      }
      const body = document.getElementsByTagName('body')[0];

      if (this.mobile_menu_visible == 1) {
          // $('html').removeClass('nav-open');
          body.classList.remove('nav-open');
    //      if ($layer) {
   //           $layer.remove();
   //       }
          setTimeout(function() {
              $toggle.classList.remove('toggled');
          }, 400);

          this.mobile_menu_visible = 0;
      } else {
          setTimeout(function() {
              $toggle.classList.add('toggled');
          }, 430);

          let $layer = document.createElement('div');
          $layer.setAttribute('class', 'close-layer');


          if (body.querySelectorAll('.main-panel')) {
              document.getElementsByClassName('main-panel')[0].appendChild($layer);
          } else if (body.classList.contains('off-canvas-sidebar')) {
              document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
          }

          setTimeout(function() {
              $layer.classList.add('visible');
          }, 100);

          $layer.onclick = function() { // asign a function
            body.classList.remove('nav-open');
            this.mobile_menu_visible = 0;
            $layer.classList.remove('visible');
            setTimeout(function() {
                $layer.remove();
                $toggle.classList.remove('toggled');
            }, 400);
          }.bind(this);

          body.classList.add('nav-open');
          this.mobile_menu_visible = 1;

      }
  };

  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
        titlee = titlee.slice( 2 );
    }
    titlee = titlee.split('/').pop();

    for (let item = 0; item < this.listTitles.length; item++) {
        if (this.listTitles[item].path === titlee) {
            return this.listTitles[item].title;
        }
    }
    return 'LecturerDashboard';
  }
//   counter(notifications:Notifications) {
//     // console.log("hello")
//      notifications[3]= 1;
//          // this.msgService.formData = Object.assign ({}, notifications);
//      this.msgService.formData = Object.assign ({}, notifications);
//      this.msgService.updateCounter(notifications[4])
//          .then(()=> console.log("Success"))
//          .catch((err)=>console.log("New Error " + err));
//  }
 counter(notifications:Notifications) {
  // console.log("hello")
   notifications[3]= 1;

       // this.msgService.formData = Object.assign ({}, notifications);
   this.msgService.formData = Object.assign ({}, notifications);
   this.msgService.updateCounter(notifications[4])
       .then(()=> console.log("Success"))
       .catch((err)=>console.log("New Error " + err));
}
open(content,notifications:Notifications) {
   this.sbody = notifications[3];
   console.log(notifications[3]);
   this.sub = notifications[0];
   this.data= notifications;
   this.modalService.open(content , {ariaLabelledBy: 'modal-basic-title', size: 'sm'}).result.then((result) => {
     this.closeResult = `Closed with: ${result}`;
   }, (reason) => {
     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   }, );
 }

 private getDismissReason(reason: any): string {
   if (reason === ModalDismissReasons.ESC) {
     return 'by pressing ESC';
   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
     return 'by clicking on a backdrop';
   } else {
     return  `with: ${reason}`;
   }
 }

 check(notifications: Notifications){
   
    this.counter(notifications);
    this.modalService.dismissAll('exit by close');
}
}
