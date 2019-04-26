import { Component, OnInit,ViewChild, } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LecturerService } from 'app/shared/lecturer.service';
import { SubjectsService } from 'app/shared/subjects.service';
import { Subjects } from 'app/shared/subjects.model';
import { Lecturer } from 'app/shared/lecturer.model';






@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
  
})
export class DashboardComponent implements OnInit {
  list: Subjects[];
  Llist: Lecturer[];
  closeResult: string;
constructor(
  private lecservice: LecturerService,
   public modalService: NgbModal,
  private firestore: AngularFirestore,
  private toastr : ToastrService,
  private subjectsService: SubjectsService
) { }
   
   ngOnInit() {
    this.subjectsService.getSubjects().subscribe(actionArray => {
      this.list = actionArray.map(item=>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() 
        } as Subjects;
        
        })
  });
  this.lecservice.getLecturers().subscribe(actionArray => {
    this.Llist = actionArray.map(item=>{
      return {
        id: item.payload.doc.id,
        ...item.payload.doc.data() 
      } as Lecturer;
      
      })
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
}
