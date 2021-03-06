import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { Message } from '_debugger';
import { MessageService } from 'app/shared/messages.service';
import { NotificationsService } from 'app/shared/notifications.service';
import { Notifications } from 'app/shared/notifications.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Approvetable } from 'app/shared/approvetable.model';
import { LecturerService } from 'app/shared/lecturer.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-anavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
      mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;
    Mlist: Message[];
    closeResult: string;
    body: string;
    sub: string;
    data: any;
    status: string;
    sbody: any;
    curEmail;
    approvaldata:  Approvetable = {
      id: '',
      email: '',
      reason: '',
      approveStatus: '',
      reasonmessage: ''
    }


    constructor(public  authService:  AuthService,
         location: Location,
         private element: ElementRef,
         private router: Router,
         private msgService: NotificationsService,
         public modalService: NgbModal,
         private lecService: LecturerService,
         private firestore: AngularFirestore,
         private toastr: ToastrService
         ) {
      this.location = location;
          this.sidebarVisible = false;
    }

    ngOnInit() {
      this.curEmail = JSON.parse(localStorage.getItem('user')).email;

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
     this.msgService.getxnotifications().subscribe(actionArray => {
        this.Mlist = actionArray.map(item => {
          const a: any = item.payload.doc.data();
          a[4] = item.payload.doc.id;
          return a;
        })


    });

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
         //   if ($layer) {
         //       $layer.remove();
         //   }
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

            $layer.onclick = function() { //asign a function
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
      return 'Dashboard';
    }

    mainController($scope) {
        $scope.count = 0;
        $scope.addNotification = function() {
            $scope.count++;
        }
        $scope.clearNotifications = function() {
            $scope.count = 0;
        };
    }
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

      check(status,notifications:Notifications){
        this.getDismissReason(0);
         this.counter(notifications);
        console.log(status);
        if (status === 'approve') {
          this.approvaldata.reason = 'About Rescheduling';
          this.approvaldata.approveStatus = status;
          this.approvaldata.reasonmessage = '';
          const data = this.approvaldata;
          delete data.id;
          const name = this.sub.split(' ')[0];
          this.lecService.getLecturerByUsername(name)
            .subscribe((res: any) => {
              let docs = res.docs.map(doc => doc.data());
              data.email = docs[0].email;
              this.firestore.collection('approvetables').add(data).then(() => {
                this.modalService.dismissAll('exit by close');
                this.toastr.info('', 'Request Approved');
              }).catch((error) => console.log(error));
            });
      

      
        const notificationbodylec = name +' rescheduling request Approved by admin ' ;
        const typel = 1; //lecturer
        const notificationsubjectlec= 'About ReScheduling of '+name+'\'s slot';
        const username = name;
        const read = 0;
     
        const notificationdatalec = Object.assign({}, [notificationbodylec,typel,notificationsubjectlec,read,username]);
        delete data.id;
          // tslint:disable-next-line:curly
         
      
           // this.firestore.collection('notifications').add(notificationdata);
            this.firestore.collection('notifications').add(notificationdatalec);
          
      
        } else {
          this.approvaldata.reason = 'About Rescheduling';
          this.approvaldata.approveStatus = status;
          this.approvaldata.reasonmessage = 'not possible';
          const data = this.approvaldata;
          delete data.id;
          const name = this.sub.split(' ')[0];
          this.lecService.getLecturerByUsername(name)
            .subscribe((res: any) => {
              let docs = res.docs.map(doc => doc.data());
              data.email = docs[0].email;
              this.firestore.collection('approvetables').add(data).then(() => {
                this.modalService.dismissAll('exit by close');
                this.toastr.error('', 'Request Rejected');
              }).catch((error) => console.log(error));
            });
      
        // const notificationbody = 'Reschedule request Rejected for '+ name;
        // const type = 2;
        // const notificationsubject= 'About ReScheduling';
        // const read = 0;
        const read = 0;
        const notificationbodylec = 'your rescheduling request Approved by admin '+ name;
        const typel = 1; //lecturer
        const notificationsubjectlec= 'About ReScheduling of '+name+'\'s slot';
        const username = name;
      
       
        const notificationdatalec = Object.assign({}, [notificationbodylec,typel,notificationsubjectlec,read,username]);
        delete data.id;
          // tslint:disable-next-line:curly
            this.firestore.collection('notifications').add(notificationdatalec);
          }
}
}