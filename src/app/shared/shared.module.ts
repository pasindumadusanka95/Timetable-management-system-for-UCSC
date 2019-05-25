import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFirstYearComponent } from 'app/viewtimetabels/view-first-year/view-first-year.component';
import { ViewSecondYearComponent } from 'app/viewtimetabels/view-second-year/view-second-year.component';
import { ViewThirdYearComponent } from 'app/viewtimetabels/view-third-year/view-third-year.component';
import { ViewFourthYearComponent } from 'app/viewtimetabels/view-fourth-year/view-fourth-year.component';
import { AdminLayoutModule } from 'app/layouts/admin-layout/admin-layout.module';
import { AppModule } from 'app/app.module';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { LecsidebarComponent } from 'app/lecComponents/lecsidebar/lecsidebar.component';
import { RouterModule } from '@angular/router';
import { LecnavbarComponent } from 'app/lecComponents/lecnavbar/lecnavbar.component';
import { SuperadminSidebarComponent } from 'app/superadmincomponent/superadmin-sidebar/superadmin-sidebar.component';
import { SuperadminDashComponent } from 'app/superadmin-dash/superadmin-dash.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SuperadminNavbarComponent } from 'app/superadmincomponent/superadmin-navbar/superadmin-navbar.component';
@NgModule({
    imports: [
        CommonModule,
        ScheduleModule,
        RouterModule,
       
       
       
     ],
    declarations: [
        ViewFirstYearComponent,
        ViewSecondYearComponent,
        ViewThirdYearComponent,
        ViewFourthYearComponent,
        LecsidebarComponent,
        LecnavbarComponent,
        SuperadminSidebarComponent,
        SuperadminNavbarComponent,
        
    ],
    exports: [
        ViewFirstYearComponent,
        ViewSecondYearComponent,
        ViewThirdYearComponent,
        ViewFourthYearComponent,
        LecsidebarComponent,
        LecnavbarComponent,
        SuperadminSidebarComponent,
        SuperadminNavbarComponent,
       
    ]
})
export class SharedModule {}