import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'app/shared/messages.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public service: MessageService, private firestore: AngularFirestore,
    private toastr : ToastrService) {}
 
  ngOnInit() {
    this.resetForm();
  }
 
 
  resetForm(form?: NgForm) {
    // tslint:disable-next-line:curly
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      LecturerID:'',
      Date:'',
      Time:'',
      Subject: '',
      Reason: '',
      
    }
  }


    // tslint:disable-next-line:member-ordering
    submitted: boolean;
    // tslint:disable-next-line:member-ordering
    showSuccessMessage: boolean;
    // tslint:disable-next-line:member-ordering
    formControls = this.service.form.controls;
  


  onSubmit(form:NgForm){
    let data = Object.assign({},form.value);
    delete data.id;
    // tslint:disable-next-line:curly
    if(form.value.id == null)
      this.firestore.collection('messages').add(data);
    // tslint:disable-next-line:curly
    else
    this.firestore.doc('messages/'+ form.value.id).update(data);
      this.resetForm(form);
      this.toastr.success('successfully','Message Sent');
  }




}


