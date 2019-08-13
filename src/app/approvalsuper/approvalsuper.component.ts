import { Component, OnInit } from '@angular/core';
import { ApprovetablesService } from 'app/shared/approvetables.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Approvetable } from 'app/shared/approvetable.model';

@Component({
  selector: 'app-approvalsuper',
  templateUrl: './approvalsuper.component.html',
  styleUrls: ['./approvalsuper.component.scss']
})
export class ApprovalsuperComponent implements OnInit {

 Slist = ['Approved','Rejected'];
 Sub = ['About TimeTable','About rescheduling'];
 
  constructor( public service: ApprovetablesService, private firestore: AngularFirestore,
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
 
  // tslint:disable-next-line:curly
  if (form.value.id == null)
    this.firestore.collection('approvetables').add(data);

    this.toastr.success('Sent successfully', 'Approval');
    this.resetForm();
}

}
