import { HallsService } from './../shared/halls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.scss']
})
export class HallsComponent implements OnInit {

  constructor(private hallsService:HallsService) { }

  ngOnInit() {
  }

}
