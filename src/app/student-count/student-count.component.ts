import { Component, OnInit } from '@angular/core';
import { StudentCountService } from 'app/shared/student-count.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-count',
  templateUrl: './student-count.component.html',
  styleUrls: ['./student-count.component.scss']
})
export class StudentCountComponent implements OnInit {

  // results: any;
  groups:any =[];

  constructor(public StudentCountservice: StudentCountService, private firestore: AngularFirestore,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    // tslint:disable-next-line:curly
    if (form != null)
      form.resetForm();
    this.StudentCountservice.formData = {
      id: null,
      registeredYear:null,
      course:'',
      subject:'',
      groupName: '',
      numberofGroups: null,
      sizeofGroups: new Array(),
    }
  }

 
 

    // tslint:disable-next-line:member-ordering
    submitted: boolean;
    // tslint:disable-next-line:member-ordering
    showSuccessMessage: boolean;
    // tslint:disable-next-line:member-ordering
    formControls = this.StudentCountservice.form.controls;
  


  onSubmit(form:NgForm){
    console.log(form)
    let data = Object.assign({},form.value);
    delete data.id;
    // tslint:disable-next-line:curly
    if(form.value.id == null)
      this.firestore.collection('studentcount').add(data);
    
    else
    this.firestore.doc('studentcount/'+ form.value.id).update(data);
      this.resetForm(form);
      this.toastr.success('Submitted successfully','Student Groups Details');
  }

  // search() {
  //   let self = this;
  //   self.results = self.firestore.collection(`studentcount`, ref => ref
  //     .orderBy('subject')
  //     .startAt(self.StudentCountservice.formData.subject.toLowerCase())
  //     .endAt(self.StudentCountservice.formData.subject.toLowerCase() + '\uf8ff')
  //     .limit(10))
  //     .valueChanges();
  // }

  onValueChange(newvalue){
    // console.log(event.eventPhase);
    this.groups=[];
    for(var i=0;i<newvalue;i++){
      this.groups[i]=this.StudentCountservice.formData.sizeofGroups[i] ;
    }
  }
}
