
import { Routes } from '@angular/router';
import { WorkloadComponent } from 'app/workload/workload.component';
import { StudentCountComponent } from 'app/student-count/student-count.component';
import { LecturerDashboardComponent } from 'app/lecturer-dashboard/lecturer-dashboard.component';
import { MessagesComponent } from 'app/messages/messages.component';
import { ChatComponent } from 'app/chat/chat.component';
import { LecturerWorkloadComponent } from 'app/lecturer-workload/lecturer-workload.component';
import { LecturerprofileComponent } from 'app/lecturerprofile/lecturerprofile.component';
import { CommontableComponent } from 'app/commontable/commontable.component';
import { NoticeListComponent } from 'app/notice-list/notice-list.component';

export const LecturerLayoutRoutes: Routes = [

     { path: 'lecturer',        component: LecturerDashboardComponent },
     { path: 'reqSchedule',     component: MessagesComponent },
     { path: 'chat',            component: ChatComponent},
     { path: 'noticelist',   component: NoticeListComponent},
     { path: 'lecturerprofile', component: LecturerprofileComponent},
     { path: 'alltimetables',   component: CommontableComponent}

];
