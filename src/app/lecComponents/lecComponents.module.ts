import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { LecsidebarComponent } from 'app/lecComponents/lecsidebar/lecsidebar.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
  
    LecsidebarComponent,
   
  ],
  exports: [

    LecsidebarComponent,
   
  ]
})
export class LecComponentsModule { }
