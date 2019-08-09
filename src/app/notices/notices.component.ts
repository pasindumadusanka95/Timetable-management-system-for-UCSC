import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NoticeService } from 'app/shared/notice.service';
import { NgForm } from '@angular/forms';
import { Notice } from 'app/shared/notice.model';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {
  list: Notice[];
  constructor(public noticeService: NoticeService,
              private firestore: AngularFirestore,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();

    this.noticeService.getNotices().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Notice;

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
      message: ''
    }
  }

  noticeSend(form: NgForm) {
    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('notices').add(data);
      this.toastr.success('Sent successfully', 'Notice');
    } else {
    this.firestore.doc('notices/' + form.value.id).update(data);
    this.toastr.success('Updated successfully', 'Notice');
    }
      this.resetForm(form);
  }

  onEdit(notice: Notice) {
    this.noticeService.formData = Object.assign ({}, notice);
  }

  onDelete(id: String) {
    if (confirm('Are you sure to delete this record?')) {
      this.firestore.doc('notices/' + id).delete()
      this.toastr.warning('Deleted successfully!', 'Notice');
    }
  }

}
