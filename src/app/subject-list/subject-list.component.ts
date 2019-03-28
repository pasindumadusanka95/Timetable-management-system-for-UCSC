import { SubjectsService } from './../shared/subjects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  constructor(private subjectsService: SubjectsService) { }
  subjectsArray = [];
  showDeleteMessage: boolean;

  ngOnInit() {
    this.subjectsService.getSubjects().subscribe(
      list => {
        this.subjectsArray = list.map(item => {
          return{
            $key: item.key,
            ...item.payload.val()
          }
        });
      });
  }

  onDelete($key){
    if(confirm('Confirm delete this record?')){
      this.subjectsService.deleteSubject($key);
      this.showDeleteMessage = true;
      setTimeout(() => this.showDeleteMessage = false, 3000);
    }
  }

}
