import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { SharedModule } from 'app/shared/shared.module';
import { SuperadminSidebarComponent } from './superadmin-sidebar/superadmin-sidebar.component';
import { SuperadminNavbarComponent } from './superadmin-navbar/superadmin-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
  
    SuperadminSidebarComponent,
    SuperadminNavbarComponent,
   
  ],
  exports: [

    SuperadminSidebarComponent,
    SuperadminNavbarComponent,
   
  ]
})
export class LecComponentsModule { }
