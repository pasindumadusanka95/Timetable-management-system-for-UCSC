import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {LecturerDashboardComponent} from './lecturer-dashboard/lecturer-dashboard.component'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from './login/login.component';
import { SuperadminDashComponent } from './superadmin-dash/superadmin-dash.component';
import { MessagesComponent } from './messages/messages.component';
import { LecturerLayoutComponent } from './lecturer-layout/lecturer-layout.component';
import { SuperadminLayoutComponent } from './superadmin-layout/superadmin-layout.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'lecturer', component: LecturerDashboardComponent },
  // { path: 'superadmin', component: SuperadminDashComponent },
  // { path: 'reqSchedule', component: MessagesComponent },
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
   {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '',
    component: LecturerLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './lecturer-layout/lecturer-layout.module#LecturerLayoutModule'
  }]},
  {
    path: '',
    component: SuperadminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './superadmin-layout/superadmin-layout.module#SuperAdminLayoutModule'
  }]},
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
