import { AngularFirestore } from '@angular/fire/firestore';
import { Subjects } from './../shared/subjects.model';
import { SubjectsService } from './../shared/subjects.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FirstyearsubjectsService } from 'app/shared/firstyearsubjects.service';
import { SecondyearsubjectsService } from 'app/shared/secondyearsubjects.service';
import { ThirdyearsubjectsService } from 'app/shared/thirdyearsubjects.service';
import { FourthyearsubjectsService } from 'app/shared/fourthyearsubjects.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  list: Subjects[];
  flist: Subjects[];
  slist: Subjects[];
  tlist: Subjects[];
  folist: Subjects[];
  firstyear: boolean;
  secondyear: boolean;
  thirdyear: boolean;
  fourthyear: boolean;
  names = ['firstyear','secondyear','thirdyear','fourthyear'];
  selItem = 'firstyear';
  constructor(private subjectsService: SubjectsService,
    private firstsubjectsService: FirstyearsubjectsService,
    private secondsubjectsService: SecondyearsubjectsService,
    private thirdsubjectsService: ThirdyearsubjectsService,
    private fourthsubjectsService: FourthyearsubjectsService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }
  subjectsArray = [];
  showDeleteMessage: boolean;

  ngOnInit() {
    this.firstyear= true;
    this.secondyear=false;
    this.thirdyear=false;
    this.fourthyear=false;
    this.subjectsService.getSubjects().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Subjects;

        })
  });
  this.firstsubjectsService.getFirstYearSubjects().subscribe(actionArray => {
    this.flist = actionArray.map(item => {
      return {
        id: item.payload.doc.id,
        ...item.payload.doc.data()
      } as Subjects;

      })
});
this.secondsubjectsService.getSecondYearSubjects().subscribe(actionArray => {
  this.slist = actionArray.map(item => {
    return {
      id: item.payload.doc.id,
      ...item.payload.doc.data()
    } as Subjects;

    })
});
this.thirdsubjectsService.getThirdYearSubjects().subscribe(actionArray => {
  this.tlist = actionArray.map(item => {
    return {
      id: item.payload.doc.id,
      ...item.payload.doc.data()
    } as Subjects;

    })
});
this.fourthsubjectsService.getFourthYearSubjects().subscribe(actionArray => {
  this.folist = actionArray.map(item => {
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

  createRange(number){
    var items: number[] = [];
    for(var i = 0; i < number; i++){
       items.push(i);
    }
    return items;
  }
  onChange(data) {
    console.log(data);
    this.selItem = data;
    // this.selectedValue = newValue;
    // console.log(newValue);
    if(data== 'firstyear' || data == ''){
      console.log('test');
     
      this.firstyear= true;
      this.secondyear=false;
      this.thirdyear=false;
      this.fourthyear=false;
    }
    else if(data== 'secondyear'){
      console.log('test1');
     
      this.firstyear= false;
      this.secondyear=true;
      this.thirdyear=false;
      this.fourthyear=false;
    }
    else if(data== 'thirdyear'){
      console.log('test2');
    
      this.firstyear= false;
      this.secondyear=false;
      this.thirdyear=true;
      this.fourthyear=false;
    }
    else{
      
     
      this.firstyear= false;
      this.secondyear=false;
      this.thirdyear=false;
      this.fourthyear=true;
    }
  
}
}
