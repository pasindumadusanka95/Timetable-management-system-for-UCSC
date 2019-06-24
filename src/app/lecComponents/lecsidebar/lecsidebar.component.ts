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
    { path: '/lecworkload', title: 'Work Load',  icon: 'work', class: '' },
    { path: '/alltimetables', title: 'Common Timetables',  icon: 'table', class: '' },
    // { path: '/chat', title: 'Chat',  icon: 'chat', class: '' },
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

