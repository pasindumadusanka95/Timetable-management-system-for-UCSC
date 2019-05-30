
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LecturerLayoutRoutes } from './lecturer-layout.routing';

import {NgxPaginationModule} from 'ngx-pagination';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { FirstYearComponent } from 'app/timetabels/first-year/first-year.component';
import { SecondYearComponent } from 'app/timetabels/second-year/second-year.component';
import { ThirdYearComponent } from 'app/timetabels/third-year/third-year.component';
import { FourthYearComponent } from 'app/timetabels/fourth-year/fourth-year.component';
import { ViewFirstYearComponent } from 'app/viewtimetabels/view-first-year/view-first-year.component';
import { ViewSecondYearComponent } from 'app/viewtimetabels/view-second-year/view-second-year.component';
import { ViewThirdYearComponent } from 'app/viewtimetabels/view-third-year/view-third-year.component';
import { ViewFourthYearComponent } from 'app/viewtimetabels/view-fourth-year/view-fourth-year.component';
import { SharedModule } from 'app/shared/shared.module';
import { WorkloadComponent } from 'app/workload/workload.component';
import { HallListComponent } from 'app/hall-list/hall-list.component';
import { StudentCountComponent } from 'app/student-count/student-count.component';
import { StudentCountListComponent } from 'app/student-count-list/student-count-list.component';
import { LecturerDashboardComponent } from 'app/lecturer-dashboard/lecturer-dashboard.component';
import { LecsidebarComponent } from 'app/lecComponents/lecsidebar/lecsidebar.component';
import { MessagesComponent } from 'app/messages/messages.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from 'app/chat/chat.component';
import { LecturerWorkloadComponent } from 'app/lecturer-workload/lecturer-workload.component';
import { LecturerprofileComponent } from 'app/lecturerprofile/lecturerprofile.component';
import { CommontableComponent } from 'app/commontable/commontable.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LecturerLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ScheduleModule,
    NgxPaginationModule,
    SharedModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,           // <----- this module will be deprecated in the future version.
    MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule,        // <----- import for date formating(optional)
  
  
  ],
  declarations: [
   
  LecturerDashboardComponent,
  MessagesComponent,
  ChatComponent,
  LecturerWorkloadComponent,
  LecturerprofileComponent,
  CommontableComponent,
  ],
  exports:[
    
    
  ],
  bootstrap:[MessagesComponent]
})

export class LecturerLayoutModule {}
