import { StudentsCountComponent } from './../../students-count/students-count.component';
import { HallsComponent } from './../../halls/halls.component';
import { SubjectsComponent } from '../../subjects/subjects.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { IconsComponent } from '../../icons/icons.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LecturersComponent } from '../../addlecturers/lecturers.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',         component: DashboardComponent },
    { path: 'halls',             component: HallsComponent },
    { path: 'table-list',        component: TableListComponent },
    { path: 'students-count',    component: StudentsCountComponent },
    { path: 'icons',             component: IconsComponent },
    { path: 'subjects',          component: SubjectsComponent },
    { path: 'upgrade',           component: UpgradeComponent },
    {path: 'managelectures',     component: LecturersComponent }
];
