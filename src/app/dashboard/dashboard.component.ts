import { Component, OnInit, ViewChild, } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LecturerService } from 'app/shared/lecturer.service';
import { SubjectsService } from 'app/shared/subjects.service';
import { Subjects } from 'app/shared/subjects.model';
import { Lecturer } from 'app/shared/lecturer.model';
import { Hall } from 'app/shared/hall.model';
import { HallService } from 'app/shared/hall.service';
import { MessageService } from 'app/shared/messages.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AuthService } from 'app/core/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],


})
export class DashboardComponent implements OnInit {
  list: Subjects[];
  Llist: Lecturer[];
  Hlist: Hall[];
  Mlist: Message[];
  closeResult: string;
  testdata=[{subcode:'SCS1001',loc:'W002'},{subcode:'SCS1002',loc:'E401'}]
constructor(
  private lecservice: LecturerService,
  public modalService: NgbModal,
  private firestore: AngularFirestore,
  private toastr: ToastrService,
  private subjectsService: SubjectsService,
  private hallservice: HallService,
  private msgService: MessageService,
  private authService: AuthService,
  private router: Router
) { }

   ngOnInit() {
    this.subjectsService.getSubjects().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Subjects;

        })
  });
  this.lecservice.getLecturers().subscribe(actionArray => {
    this.Llist = actionArray.map(item => {
      return {
        id: item.payload.doc.id,
        ...item.payload.doc.data()
      } as Lecturer;

      })
  });
  this.hallservice.getHall().subscribe(actionArray => {
    this.Hlist = actionArray.map(item => {
      return {
        id: item.payload.doc.id,
        ...item.payload.doc.data()
    } as Hall;
      })
  });
  this.msgService.getMessages().subscribe(actionArray => {
    this.Mlist = actionArray.map(item => {
      const a: any = item.payload.doc.data();
      return a.message
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
      createRange(number){
        var items: number[] = [];
        for(var i = 0; i < number; i++){
           items.push(i);
        }
        return items;
      }

      publishButtonAction() {
        this.lecservice.publishState = true;
      }

      revokeButtonAction() {
        this.lecservice.publishState = false;
      }
}
