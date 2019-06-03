import { AdminGuard } from './core/admin.guard';
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
import { HomepageComponent } from './homepage/homepage.component';
import { LecturerGuard } from './core/lecturer.guard';
import { SuperadminGuard } from './core/superadmin.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomepageComponent },
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
    canActivate: [AdminGuard],
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '',
    component: LecturerLayoutComponent,
    canActivate: [LecturerGuard],
    children: [
        {
      path: '',
      loadChildren: './lecturer-layout/lecturer-layout.module#LecturerLayoutModule'
  }]},
  {
    path: '',
    component: SuperadminLayoutComponent,
    canActivate: [SuperadminGuard],
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
