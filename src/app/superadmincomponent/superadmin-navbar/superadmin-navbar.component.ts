import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';
import { Notifications } from 'app/shared/notifications.model';
import { NotificationsService } from 'app/shared/notifications.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Approvetable } from 'app/shared/approvetable.model';
import { LecturerService } from 'app/shared/lecturer.service';

@Component({
  selector: 'app-superadmin-navbar',
  templateUrl: './superadmin-navbar.component.html',
  styleUrls: ['./superadmin-navbar.component.scss']
})
export class SuperadminNavbarComponent implements OnInit {
  Mlist: Notifications[];
  closeResult: string;
  body: string;
  sub: string;
  data: any;
  status: string;
  approvaldata:  Approvetable = {
    id: '',
    email: '',
    reason: '',
    approveStatus: '',
    reasonmessage: ''
  }

  constructor(public authService: AuthService,
    private msgService: NotificationsService,
    public modalService: NgbModal,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private lecService: LecturerService
    ) { }

  ngOnInit() {
    this.msgService.getsupernotifications().subscribe(actionArray => {
      this.Mlist = actionArray.map(item => {
        const a: any = item.payload.doc.data();
        a[4] = item.payload.doc.id;
        return a;
      })
    });
  }

  open(content,notifications:Notifications) {
    this.body = notifications[2];
    this.sub = notifications[0];
    this.data= notifications;
    this.modalService.open(content , {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
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
  
  counter(notifications:Notifications) {
    // console.log("hello")
    this.body = notifications[2];
    this.sub = notifications[0];
     notifications[3]= 1;
         // this.msgService.formData = Object.assign ({}, notifications);
     this.msgService.formData = Object.assign ({}, notifications);
     this.msgService.updateCounter(notifications[4])
         .then(()=> console.log("Success"))
         .catch((err)=>console.log("New Error " + err));
 }

 check(status,notifications:Notifications){
  this.getDismissReason(0);
   this.counter(notifications);
  console.log(status);
  if (status === 'approve') {
    this.approvaldata.reason = 'sss';
    this.approvaldata.approveStatus = status;
    this.approvaldata.reasonmessage = 'df';
    const data = this.approvaldata;
    delete data.id;
    const name = this.sub.split(' ')[0];
    this.lecService.getLecturerByUsername(name)
      .subscribe((res: any) => {
        let docs = res.docs.map(doc => doc.data());
        data.email = docs[0].email;
        this.firestore.collection('approvetables').add(data).then(() => {
          this.modalService.dismissAll('exit by close');
          this.toastr.success('', 'Request Approved');
        }).catch((error) => console.log(error));
      });
  } else {
    this.approvaldata.reason = 'sss';
    this.approvaldata.approveStatus = status;
    const data = this.approvaldata;
    delete data.id;
    this.firestore.collection('approvetables').add(data);
    this.toastr.success('', 'Request Rejected');
  }
}
}

