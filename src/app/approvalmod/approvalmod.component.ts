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
  // tslint:disable-next-line:curly
  if (form.value.id == null)
    this.firestore.collection('sendapproval').add(data);

    this.toastr.success('for Approval successfully', 'Details Sent');
    this.resetForm();
}

}
