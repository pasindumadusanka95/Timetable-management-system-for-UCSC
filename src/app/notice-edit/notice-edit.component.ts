import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'app/shared/notice.service';
import { Notice } from 'app/shared/notice.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notice-edit',
  templateUrl: './notice-edit.component.html',
  styleUrls: ['./notice-edit.component.scss']
})
export class NoticeEditComponent implements OnInit {
  list: Notice[];
  constructor(public noticeService: NoticeService,
              private firestore: AngularFirestore,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.noticeService.getNotices().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Notice;

        })
    });
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
