import { Component, OnInit } from '@angular/core';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/lecturer', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/reqSchedule', title: 'Request Reschedule',  icon: 'schedule', class: '' },
    { path: '/workload', title: 'Work Load',  icon: 'work', class: '' },
    { path: '/commontable', title: 'Common Timetable',  icon: 'schedule', class: '' },
    // { path: '/halls', title: 'Manage Halls',  icon: 'house', class: '' },
    // { path: '/typography', title: 'Manage Student Counts',  icon: 'people', class: '' },
    // { path: '/subjects', title: 'Manage Subjects',  icon: 'books', class: '' },
];

@Component({
  selector: 'app-lecsidebar',
  templateUrl: './lecsidebar.component.html',
  styleUrls: ['./lecsidebar.component.scss']
})
export class LecsidebarComponent implements OnInit {
  MenuItems: any[];
  constructor() { }

  ngOnInit() {
    this.MenuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

