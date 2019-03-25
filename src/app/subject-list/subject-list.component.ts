import { SubjectsService } from './../shared/subjects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  constructor(private subjectsService: SubjectsService) { }

  ngOnInit() {
    this.subjectsService.getSubjects();
  }

}
