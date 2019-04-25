import { Component, OnInit,ViewChild, } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LecturerService } from 'app/shared/lecturer.service';
import { SubjectsService } from 'app/shared/subjects.service';






@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
  
})
export class DashboardComponent implements OnInit {
  subjectsArray = [];
  closeResult: string;
constructor(
  private service: LecturerService,
   public modalService: NgbModal,
  private firestore: AngularFirestore,
  private toastr : ToastrService,
  private subjectsService: SubjectsService
) { }
   
   ngOnInit() {
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
}
