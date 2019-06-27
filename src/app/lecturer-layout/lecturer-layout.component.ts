import { Lecturer } from 'app/shared/lecturer.model';
import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/filter';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import { LecProfileService } from 'app/shared/lec-profile.service';
import { AuthService } from 'app/core/auth.service';
import { User } from 'app/core/user';

@Component({
  selector: 'app-lecturer-layout',
  templateUrl: './lecturer-layout.component.html',
  styleUrls: ['./lecturer-layout.component.scss']
})
export class LecturerLayoutComponent implements OnInit {

  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  lecturer: Lecturer[];
  user: User;

  constructor( public location: Location,
               private router: Router,
               public service: LecProfileService,
               private authService: AuthService) {}

  ngOnInit() {
      const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

      if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
          // if we are on windows OS we activate the perfectScrollbar function

          document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
      } else {
          document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
      }
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');

      this.location.subscribe((ev: PopStateEvent) => {
          this.lastPoppedUrl = ev.url;
      });
       this.router.events.subscribe((event: any) => {
          if (event instanceof NavigationStart) {
             if (event.url != this.lastPoppedUrl) {
                 this.yScrollStack.push(window.scrollY);
             }
         } else if (event instanceof NavigationEnd) {
             if (event.url == this.lastPoppedUrl) {
                 this.lastPoppedUrl = undefined;
                 window.scrollTo(0, this.yScrollStack.pop());
             } else {
                 window.scrollTo(0, 0);
             }
         }
      });
      this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
           elemMainPanel.scrollTop = 0;
           elemSidebar.scrollTop = 0;
      });
      if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
          let ps = new PerfectScrollbar(elemMainPanel);
          ps = new PerfectScrollbar(elemSidebar);
      }

      this.authService.getUser().subscribe( user => {
        if (user) {
          this.user = user;
        }
        console.log(this.user.email);
      });

      this.service.getLecturers().subscribe(actionArray => {
        this.lecturer = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as Lecturer;

          })
    });

    // this.getLecturer();




  }

  getLecturer() {
    for (const l of this.lecturer) {
    // tslint:disable-next-line: triple-equals
        if (l.email == this.user.email) {
            localStorage.setItem('curLec', JSON.stringify(l));
            return l;
        }
    }
  }

  ngAfterViewInit() {
      this.runOnRouteChange();
  }
  isMaps(path) {
      let titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if (path == titlee) {
          return false;
      } else {
          return true;
      }
  }
  runOnRouteChange(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const ps = new PerfectScrollbar(elemMainPanel);
      ps.update();
    }
  }
  isMac(): boolean {
      let bool = false;
      if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
          bool = true;
      }
      return bool;
  }

}
