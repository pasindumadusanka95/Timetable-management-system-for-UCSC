import { SuperadminSidebarComponent } from 'app/superadmincomponent/superadmin-sidebar/superadmin-sidebar.component';
import { HallsService } from './shared/halls.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'
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
import { EditLecturerComponent } from './edit-lecturer/edit-lecturer.component';
import {LecturerService} from './shared/lecturer.service';
import { SubjectsService } from './shared/subjects.service';
import {TimeTableCRUDService} from './shared/time-table-crud.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { LecturerDashboardComponent } from './lecturer-dashboard/lecturer-dashboard.component';

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
import { ChatComponent } from './chat/chat.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoreModule } from './core/core.module';
import { LecturerWorkloadComponent } from './lecturer-workload/lecturer-workload.component';
import { SuperadminNavbarComponent } from './superadmincomponent/superadmin-navbar/superadmin-navbar.component';
import { TagInputModule } from 'ngx-chips';
import { CommontableComponent } from './commontable/commontable.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { ApprovalmodComponent } from './approvalmod/approvalmod.component';
import { ViewUpcomingLecturesComponent } from './view-upcoming-lectures/view-upcoming-lectures.component';
import { LecturerViewFirstYearComponent } from './viewtimetabels/lecturer-view-first-year/lecturer-view-first-year.component';
import { LecturerViewSecondYearComponent } from './viewtimetabels/lecturer-view-second-year/lecturer-view-second-year.component';
import { LecturerViewThirdYearComponent } from './viewtimetabels/lecturer-view-third-year/lecturer-view-third-year.component';
import { LecturerViewFourthYearComponent } from './viewtimetabels/lecturer-view-fourth-year/lecturer-view-fourth-year.component';








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
    CoreModule,
    TagInputModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    EditLecturerComponent,
    SuperadminLayoutComponent,
    LecturerLayoutComponent,
    HomepageComponent,
    
    
    
    //SubjectsComponent,
    //SubjectListComponent,

  ],
  providers: [LecturerService, SubjectsService, TimeTableCRUDService, NgbActiveModal, HallsService,
    // LecturerDashboardComponent,
    // LecsidebarComponent,

  //  SuperadminSidebarComponent,
    LecturerLayoutComponent,
    SuperadminLayoutComponent,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

