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

@NgModule({
    imports: [
        CommonModule,
        ScheduleModule,
        RouterModule
     ],
    declarations: [
        ViewFirstYearComponent,
        ViewSecondYearComponent,
        ViewThirdYearComponent,
        ViewFourthYearComponent,
        LecsidebarComponent,
        LecnavbarComponent
    ],
    exports: [
        ViewFirstYearComponent,
        ViewSecondYearComponent,
        ViewThirdYearComponent,
        ViewFourthYearComponent,
        LecsidebarComponent,
        LecnavbarComponent
    ]
})
export class SharedModule {}