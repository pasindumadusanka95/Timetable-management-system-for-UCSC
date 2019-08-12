import { HallsComponent } from './../../halls/halls.component';
import { SubjectListComponent } from './../../subject-list/subject-list.component';
import { SubjectsComponent } from './../../subjects/subjects.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { LecturersComponent } from '../../addlecturers/lecturers.component';
import {LecturersListComponent} from '../../lecturers-list/lecturers-list.component';
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

import { SharedModule } from 'app/shared/shared.module';
import { WorkloadComponent } from 'app/workload/workload.component';
import { HallListComponent } from 'app/hall-list/hall-list.component';
import { StudentCountComponent } from 'app/student-count/student-count.component';
import { StudentCountListComponent } from 'app/student-count-list/student-count-list.component';
import { TagInputModule } from 'ngx-chips';
import { ApprovalmodComponent } from 'app/approvalmod/approvalmod.component';
import { ViewUpcomingLecturesComponent } from 'app/view-upcoming-lectures/view-upcoming-lectures.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
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
    TagInputModule
  ],
  declarations: [
    DashboardComponent,
    HallsComponent,
    TableListComponent,
    LecturersComponent,
    LecturersListComponent,
    SubjectsComponent,
    SubjectListComponent,
    FirstYearComponent,
    SecondYearComponent,
    ThirdYearComponent,
    FourthYearComponent,
    WorkloadComponent,
    HallListComponent,
    StudentCountComponent,
    StudentCountListComponent,
    FirstYearComponent,
    SecondYearComponent,
    ThirdYearComponent,
    FourthYearComponent,
    ApprovalmodComponent,
    ViewUpcomingLecturesComponent,

  
    
    
  ],
  exports:[
    FirstYearComponent,
    SecondYearComponent,
    ThirdYearComponent,
    FourthYearComponent,
    
  ]
})

export class AdminLayoutModule {}
