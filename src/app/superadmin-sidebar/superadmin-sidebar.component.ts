import { Component, OnInit } from '@angular/core';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/superadmin', title: 'Dashboard',  icon: 'dashboard', class: '' },
    // { path: '/table-list', title: 'View Time Tables',  icon: 'content_paste', class: '' },
    // { path: '/managelectures', title: 'Manage Lecturers',  icon: 'person', class: '' },
    // { path: '/halls', title: 'Manage Halls',  icon: 'house', class: '' },
    // { path: '/typography', title: 'Manage Student Counts',  icon: 'people', class: '' },
    // { path: '/subjects', title: 'Manage Subjects',  icon: 'books', class: '' },
];


@Component({
  selector: 'app-superadmin-sidebar',
  templateUrl: './superadmin-sidebar.component.html',
  styleUrls: ['./superadmin-sidebar.component.scss']
})
export class SuperadminSidebarComponent implements OnInit {
  menuItems: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

