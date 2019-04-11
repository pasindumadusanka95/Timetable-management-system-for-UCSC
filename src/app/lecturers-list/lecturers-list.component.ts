import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {NgbActiveModal, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LecturerService} from '../shared/lecturer.service';
import { from } from 'rxjs';
import { Lecturer } from 'app/shared/lecturer.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-lecturers-list',
  templateUrl: './lecturers-list.component.html',
  styleUrls: ['./lecturers-list.component.scss']
})
export class LecturersListComponent implements OnInit {
  closeResult: string;
  list: Lecturer[];
  constructor(
    // public crudApi: LecturerService, // Inject student CRUD services in constructor.
   // public toastr: ToastrService ,  // Toastr service for alert message
    private service: LecturerService,
   public modalService: NgbModal,
  public activeModal: NgbActiveModal,
  private firestore: AngularFirestore,
  private toastr : ToastrService
   ) { }

   // tslint:disable-next-line:member-ordering
   lecturerArray = [];
   showDeleteMessage: boolean;

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


  ngOnInit() {

    this.service.getLecturers().subscribe(actionArray => {
      this.list = actionArray.map(item=>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() 
        } as Lecturer;
        
        })
  });

}

onEdit(lecturer:Lecturer){
  this.service.formData= Object.assign ({}, lecturer);
  this.activeModal.close('Edit close');
  
}

onDelete(id:String){
  if(confirm('Are you sure to delete this record?')){
      this.firestore.doc('lecturers/'+ id).delete()
  this.toastr.warning('Deleted successfully!','Lecturer Record');
    }
}

  }


