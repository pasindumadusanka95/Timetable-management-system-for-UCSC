import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/table-list', title: 'View Time Tables',  icon: 'content_paste', class: '' },
    { path: '/managelectures', title: 'Manage Lecturers',  icon: 'person', class: '' },
    { path: '/halls', title: 'Manage Halls',  icon: 'house', class: '' },
    { path: '/typography', title: 'Manage Student Counts',  icon: 'people', class: '' },
    { path: '/subjects', title: 'Manage Subjects',  icon: 'books', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
