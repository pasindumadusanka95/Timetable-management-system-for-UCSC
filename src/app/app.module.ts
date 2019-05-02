import { HallsService } from './shared/halls.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
// import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HallsComponent } from './halls/halls.component';
import { LecturersComponent } from './addlecturers/lecturers.component';
import {NgbModule,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'
// Toaster for Alert Messages
// Firebase Modules
import {AngularFireModule} from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ToastrModule } from 'ngx-toastr';
// Reactive Form Module
import { ReactiveFormsModule } from '@angular/forms';
// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';
import { LecturersListComponent } from './lecturers-list/lecturers-list.component';
import { EditLecturerComponent } from './edit-lecturer/edit-lecturer.component';
import {LecturerService} from './shared/lecturer.service';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectsService } from './shared/subjects.service';
import {TimeTableCRUDService} from './shared/time-table-crud.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { LecturerDashboardComponent } from './lecturer-dashboard/lecturer-dashboard.component';
import { HallListComponent } from './hall-list/hall-list.component';
import { LecsidebarComponent } from './lecsidebar/lecsidebar.component';
import { SuperadminDashComponent } from './superadmin-dash/superadmin-dash.component';
import { SuperadminSidebarComponent } from './superadmin-sidebar/superadmin-sidebar.component';
import { StudentsCountComponent } from './students-count/students-count.component';
import { LecsidebarComponent } from './lecComponents/lecsidebar/lecsidebar.component';
import { SuperadminDashComponent } from './superadmin-dash/superadmin-dash.component';

import { ViewFirstYearComponent } from './viewtimetabels/view-first-year/view-first-year.component';
import { ViewSecondYearComponent } from './viewtimetabels/view-second-year/view-second-year.component';
import { ViewThirdYearComponent } from './viewtimetabels/view-third-year/view-third-year.component';
import { ViewFourthYearComponent } from './viewtimetabels/view-fourth-year/view-fourth-year.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { SharedModule } from './shared/shared.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { WorkloadComponent } from './workload/workload.component';
import { HallListComponent } from './hall-list/hall-list.component';
import { StudentCountComponent } from './student-count/student-count.component';
import { StudentCountListComponent } from './student-count-list/student-count-list.component';
import { MessagesComponent } from './messages/messages.component';
import { LecturerLayoutComponent } from './lecturer-layout/lecturer-layout.component';
import { LecnavbarComponent } from './lecComponents/lecnavbar/lecnavbar.component';
import { SuperadminLayoutComponent } from './superadmin-layout/superadmin-layout.component';
import { NoticesComponent } from './notices/notices.component';




// tslint:disable-next-line:prefer-const
let config = {
  apiKey: 'AIzaSyAO3dPICHK8GbsBOsHXnjOIsnY1ABELVFk',
  authDomain: 'timetablemanager-1769a.firebaseapp.com',
  databaseURL: 'https://timetablemanager-1769a.firebaseio.com',
  projectId: 'timetablemanager-1769a',
  storageBucket: 'timetablemanager-1769a.appspot.com',
  messagingSenderId: '142400018060'
};
@NgModule({
  imports: [
    
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Main Angular fire module
    AngularFireDatabaseModule,  // Firebase database module
    HttpModule,
    AngularFirestoreModule,
    NgbModule,
    ComponentsModule,
    RouterModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    ReactiveFormsModule,        // Reactive forms module
    AppRoutingModule,
    ScheduleModule,
    BrowserAnimationsModule,    // Required animations module for Toastr
    ToastrModule.forRoot({      // Register NgxToast NPM module
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgxPaginationModule ,
    SharedModule,
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    EditLecturerComponent,
    LecturerDashboardComponent,
    HallListComponent,
    LecsidebarComponent,
    SuperadminDashComponent,
    SuperadminSidebarComponent,
    
    
    
    
   
    
    
    //SubjectsComponent,
    //SubjectListComponent,

  ],
  providers: [LecturerService, SubjectsService,TimeTableCRUDService,NgbActiveModal, HallsService],
    // LecturerDashboardComponent,
    // LecsidebarComponent,
  
  //  SuperadminSidebarComponent,
    LecturerLayoutComponent,
    SuperadminLayoutComponent,

  ],
  exports:[
    
  ],
  providers: [LecturerService, SubjectsService,TimeTableCRUDService,NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }

