import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatService } from 'app/shared/chat.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Chat } from 'app/shared/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  list: Chat[];
  constructor(public chatService: ChatService,
              private firestore: AngularFirestore,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();

    this.chatService.getChats().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Chat;

        })
    });

  }

  resetForm(form?: NgForm) {
    // tslint:disable-next-line:curly
    // if (form != null)
    //   form.resetForm();
    this.chatService.formData = {
      id: null,
      name: JSON.parse(localStorage.getItem('curLec')).firstName + ' ' + JSON.parse(localStorage.getItem('curLec')).lastName,
      timestamp: Date.now(),
      message: ''
    }
  }

  chatSend(form: NgForm) {
    const data = Object.assign({}, form.value);
    this.firestore.collection('chats').add(data);
    this.resetForm(form);
    this.toastr.success('Sent successfully', 'Message');
  }

}
