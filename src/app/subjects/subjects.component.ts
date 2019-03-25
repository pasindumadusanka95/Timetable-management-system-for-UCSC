import { SubjectsService } from './../shared/subjects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(private subjectsService: SubjectsService) { }
  submitted: boolean;
  formControls = this.subjectsService.form.controls;

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    if (this.subjectsService.form.valid) {
     if (this.subjectsService.form.get('$key').value == null) {
       this.subjectsService.insertSubjects(this.subjectsService.form.value);
      //  this.showSuccessMessage = true;
      //  setTimeout(() => this.showSuccessMessage = false, 3000);
     }
    this.submitted = false;
    this.subjectsService.form.reset();
  }

}
}
