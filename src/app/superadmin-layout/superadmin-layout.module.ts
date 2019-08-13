
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {NgxPaginationModule} from 'ngx-pagination';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
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
import { SuperadminDashComponent } from 'app/superadmin-dash/superadmin-dash.component';
import { SuperAdminLayoutRoutes } from './superadmin-layout.routing';
import { NoticesComponent } from 'app/notices/notices.component';
import { ApprovalsuperComponent } from 'app/approvalsuper/approvalsuper.component';
import { NoticeEditComponent } from 'app/notice-edit/notice-edit.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SuperAdminLayoutRoutes),
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
    SharedModule
  ],
  declarations: [
    SuperadminDashComponent,
    NoticesComponent,
    ApprovalsuperComponent,
    NoticeEditComponent

  ],
  exports: [
    SuperadminDashComponent,

  ]
})

export class SuperAdminLayoutModule {}
