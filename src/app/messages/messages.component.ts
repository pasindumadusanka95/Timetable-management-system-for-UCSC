import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'app/shared/messages.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Subjects } from 'app/shared/subjects.model';
import { NotificationsService } from 'app/shared/notifications.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  subjects: Subjects[];
  constructor(public service: MessageService, private firestore: AngularFirestore,
    private toastr: ToastrService,public notiservice: NotificationsService) {}

  ngOnInit() {
    this.resetForm();
    this.service.getSubjects().subscribe(actionArray => {
      this.subjects = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Subjects;

        })
  });
  }


  resetForm(form?: NgForm) {
    // tslint:disable-next-line:curly
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      LecturerID: '',
      Date: '',
      Time: '',
      NewDate: '',
      NewTime: '',
      Subject: '',
      Reason: '',
      Message: ''

    }
  }


    // tslint:disable-next-line:member-ordering
    submitted: boolean;
    // tslint:disable-next-line:member-ordering
    showSuccessMessage: boolean;
    // tslint:disable-next-line:member-ordering
    formControls = this.service.form.controls;



  onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
   console.log(data);
  // tslint:disable-next-line:max-line-length
  // this.notiservice.formData.notification_body = data.LecturerID + ' requested rechedule for ' + data.Subject + ' on ' + data.Date + ' at ' + data.Time + '. requesting new date on ' + data.NewDate + ' at ' + data.NewTime + '.';
  // this.notiservice.formData.type=2;
  // this.notiservice.formData.notification_subject="recheduling request";
  const notificationdata = Object.assign({}, this.notiservice.formData);
  delete data.id;
    // tslint:disable-next-line:curly
    if (form.value.id == null) {
      this.firestore.collection('messages').add(data);
      this.firestore.collection('notifications').add(notificationdata);
    } else {
    this.firestore.doc('messages/' + form.value.id).update(data);
    }
      this.resetForm(form);
      this.toastr.success('successfully', 'Message Sent');
  }

  onChange(newValue) {
    // console.log(newValue);
    this.service.formData.Subject = newValue;
}



}


