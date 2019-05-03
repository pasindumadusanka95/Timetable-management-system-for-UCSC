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
import { EditLecturerComponent } from './edit-lecturer/edit-lecturer.component';
import {LecturerService} from './shared/lecturer.service';
import { SubjectsService } from './shared/subjects.service';
import {TimeTableCRUDService} from './shared/time-table-crud.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { LecturerDashboardComponent } from './lecturer-dashboard/lecturer-dashboard.component';
import { LecsidebarComponent } from './lecsidebar/lecsidebar.component';
import { SuperadminDashComponent } from './superadmin-dash/superadmin-dash.component';
import { SuperadminSidebarComponent } from './superadmin-sidebar/superadmin-sidebar.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { SharedModule } from './shared/shared.module';



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
    BrowserAnimationsModule,
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
    SharedModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    EditLecturerComponent,
    LecturerDashboardComponent,
    LecsidebarComponent,
    SuperadminDashComponent,
    SuperadminSidebarComponent,
    ],
  exports:[
    
  ],
  providers: [LecturerService, SubjectsService,TimeTableCRUDService,NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }

