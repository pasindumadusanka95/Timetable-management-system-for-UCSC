import { Lecturer } from './../shared/lecturer.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LecturerService } from 'app/shared/lecturer.service';
import { SubjectsService } from 'app/shared/subjects.service';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';

@Component({
  selector: 'app-lecturer-dashboard',
  templateUrl: './lecturer-dashboard.component.html',
  styleUrls: ['./lecturer-dashboard.component.scss']
})
export class LecturerDashboardComponent implements OnInit {
  names = ['firstyear','secondyear','thirdyear','fourthyear'];
  selItem = 'firstyear';
  subjectsArray = [];
  firstyear: boolean;
  secondyear: boolean;
  thirdyear: boolean;
  fourthyear: boolean;
  selectedValue: any;
  closeResult: string;
  Y: string;
  public curLec: Lecturer = JSON.parse(localStorage.getItem('curLec'));

constructor(
  private service: LecturerService,
   public modalService: NgbModal,
  private firestore: AngularFirestore,
  private toastr: ToastrService,
  private subjectsService: SubjectsService
) { }

   ngOnInit() {
     this.Y= 'First Year';
    this.firstyear= true;
    this.secondyear=false;
    this.thirdyear=false;
    this.fourthyear=false;
    this.subjectsService.getSubjects().subscribe(
      list => {
        this.subjectsArray = list.map(item => {
          return{
          //  $key: item.key,
         //   ...item.payload.val()
          }
        });
      });

      }


      open(content) {
        this.modalService.open(content , {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }, );
      }

      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }

      onChange(data) {
        console.log(data);
        this.selItem = data;
        // this.selectedValue = newValue;
        // console.log(newValue);
        if(data== 'firstyear' || data == ''){
          console.log('test');
          this.Y = 'First Year';
          this.firstyear= true;
          this.secondyear=false;
          this.thirdyear=false;
          this.fourthyear=false;
        }
        else if(data== 'secondyear'){
          console.log('test1');
          this.Y = 'Second Year';
          this.firstyear= false;
          this.secondyear=true;
          this.thirdyear=false;
          this.fourthyear=false;
        }
        else if(data== 'thirdyear'){
          console.log('test2');
          this.Y = 'Third Year';
          this.firstyear= false;
          this.secondyear=false;
          this.thirdyear=true;
          this.fourthyear=false;
        }
        else{
          console.log('test3');
          this.Y= 'Fourth Year';
          this.firstyear= false;
          this.secondyear=false;
          this.thirdyear=false;
          this.fourthyear=true;
        }
      
    }
}
