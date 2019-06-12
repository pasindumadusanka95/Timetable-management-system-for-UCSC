import { AngularFirestore } from '@angular/fire/firestore';
import { Subjects } from './../shared/subjects.model';
import { SubjectsService } from './../shared/subjects.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  list: Subjects[];

  constructor(private subjectsService: SubjectsService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }
  subjectsArray = [];
  showDeleteMessage: boolean;

  ngOnInit() {
    this.subjectsService.getSubjects().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Subjects;

        })
  });
  }

  onEdit(subject: Subjects) {
    this.subjectsService.formData = Object.assign ({}, subject);
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.firestore.doc('subjects/' + id).delete()
      this.toastr.warning('Deleted successfully!', 'Subject Record');
    }
  }

}
