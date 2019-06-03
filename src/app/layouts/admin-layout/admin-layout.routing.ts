
import { HallsComponent } from './../../halls/halls.component';
import { SubjectsComponent } from '../../subjects/subjects.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { LecturersComponent } from '../../addlecturers/lecturers.component';
import { WorkloadComponent } from 'app/workload/workload.component';
import { StudentCountComponent } from 'app/student-count/student-count.component';
import { AdminGuard } from 'app/core/admin.guard';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',         component: DashboardComponent },
    { path: 'halls',             component: HallsComponent, canActivate: [AdminGuard], },
    { path: 'table-list',        component: TableListComponent },
    { path: 'subjects',          component: SubjectsComponent },
    { path: 'managelectures',     component: LecturersComponent },
    { path: 'student-count',     component: StudentCountComponent },
    { path: 'workload',  component: WorkloadComponent },

];
