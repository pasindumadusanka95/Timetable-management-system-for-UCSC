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
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
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
import { ViewFirstYearComponent } from 'app/viewtimetabels/view-first-year/view-first-year.component';
import { ViewSecondYearComponent } from 'app/viewtimetabels/view-second-year/view-second-year.component';
import { ViewThirdYearComponent } from 'app/viewtimetabels/view-third-year/view-third-year.component';
import { ViewFourthYearComponent } from 'app/viewtimetabels/view-fourth-year/view-fourth-year.component';
import { SharedModule } from 'app/shared/shared.module';


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
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    HallsComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LecturersComponent,
    LecturersListComponent,
    SubjectsComponent,
    SubjectListComponent,
    FirstYearComponent,
    SecondYearComponent,
    ThirdYearComponent,
    FourthYearComponent,
    
    
  ],
  exports:[
    FirstYearComponent,
    SecondYearComponent,
    ThirdYearComponent,
    FourthYearComponent,
    
  ]
})

export class AdminLayoutModule {}
