import { Component, OnInit } from '@angular/core';
import { Notice } from 'app/shared/notice.model';
import { NoticeService } from 'app/shared/notice.service';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.scss']
})
export class NoticeListComponent implements OnInit {
  list: Notice[];
  constructor(public noticeService: NoticeService) { }

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

}
