import { Component, OnInit } from '@angular/core';
import { ApprovetablesService } from 'app/shared/approvetables.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { SendapprovalService } from 'app/shared/sendapproval.service';

@Component({
  selector: 'app-approvalmod',
  templateUrl: './approvalmod.component.html',
  styleUrls: ['./approvalmod.component.scss']
})
export class ApprovalmodComponent implements OnInit {
  Slist = ['Approved','Rejected'];
  Sub = ['About TimeTable','About rescheduling'];
  constructor( public service: SendapprovalService, private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    // tslint:disable-next-line:curly
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      reason:'',
     approveStatus: '',
      reasonmessage: '',


    }
  }
  onChange(newValue) {
    console.log(newValue);
   this.service.formData.approveStatus = newValue;
}
onChangeSub(newValue) {
  console.log(newValue);
 this.service.formData.reason = newValue;
}
onSubmit(form: NgForm) {
  
  
  console.log('hello');
  const data = Object.assign({}, form.value);
  delete data.id;
  data.approveStatus= 'Pending';
  if (form.value.id == null){
  if(data.reason=='About TimeTable'){
    const notificationbody = 'New TimeTable available';
    const typesuper=0;
    const notificationsubject='Approval Requested';
    const read=0;
    const notificationdatasuper = Object.assign({}, [notificationbody,typesuper,notificationsubject,read]);
    // tslint:disable-next-line:curly
   
      this.firestore.collection('notifications').add(notificationdatasuper);
      this.firestore.collection('sendapproval').add(data);
  
      this.toastr.success('for Approval successfully', 'Details Sent');
      this.resetForm();
    
  }
  else if(data.reason=='About rescheduling'){
    // tslint:disable-next-line: no-shadowed-variable
    const notificationbody = 'New slot has assigned to a lecturer. Details :- '+ data.reasonmessage;
    const typesuper=0;
    const notificationsubject='Approval Requested';
    const read=0;
    const notificationdatasuper = Object.assign({}, [notificationbody,typesuper,notificationsubject,read]);
    // tslint:disable-next-line:curly
   
      this.firestore.collection('notifications').add(notificationdatasuper);
      this.firestore.collection('sendapproval').add(data);
  
      this.toastr.success('for Approval successfully', 'Details Sent');
      this.resetForm();
   
  }
 
}
}
}
