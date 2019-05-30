import { Component, OnInit } from '@angular/core';
import { LecturerService } from 'app/shared/lecturer.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { SubjectsService } from 'app/shared/subjects.service';

@Component({
  selector: 'app-commontable',
  templateUrl: './commontable.component.html',
  styleUrls: ['./commontable.component.scss']
})
export class CommontableComponent implements OnInit {

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
