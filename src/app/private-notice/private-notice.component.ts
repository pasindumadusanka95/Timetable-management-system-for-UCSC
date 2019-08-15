import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Notices } from 'app/shared/notices.model';
import { PrivateNoticeService } from 'app/shared/private-notice.service';

@Component({
  selector: 'app-private-notice',
  templateUrl: './private-notice.component.html',
  styleUrls: ['./private-notice.component.scss']
})
export class PrivateNoticeComponent implements OnInit {
  list: Notices[];
  public curLecUsername;
  constructor(public noticeService: PrivateNoticeService,
              private firestore: AngularFirestore,
              private toastr: ToastrService) { }

ngOnInit() {
this.curLecUsername = JSON.parse(localStorage.getItem('curLec')).userName;

this.resetForm();

this.noticeService.getNotices().subscribe(actionArray => {
this.list = actionArray.map(item => {
return {
id: item.payload.doc.id,
...item.payload.doc.data()
} as Notices;

})
});
}

resetForm(form?: NgForm) {
// tslint:disable-next-line:curly
// if (form != null)
//   form.resetForm();
this.noticeService.formData = {
id: null,
subject: '',
timestamp: Date.now(),
user: '',
message: ''
}
}

noticeSend(form: NgForm) {
const data = Object.assign({}, form.value);
delete data.id;
if (form.value.id == null) {
this.firestore.collection('privateNotices').add(data);
this.toastr.success('Sent successfully', 'Notice');
} else {
this.firestore.doc('privateNotices/' + form.value.id).update(data);
this.toastr.success('Updated successfully', 'Notice');
}
this.resetForm(form);
}

onEdit(notice: Notices) {
this.noticeService.formData = Object.assign ({}, notice);
window.scroll({
top: 0,
left: 0,
behavior: 'smooth'
});
}

onDelete(id: String) {
if (confirm('Are you sure to delete this record?')) {
this.firestore.doc('privateNotices/' + id).delete()
this.toastr.warning('Deleted successfully!', 'Notice');
}
}

}
