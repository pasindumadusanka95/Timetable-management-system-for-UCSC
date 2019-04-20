import { Injectable } from '@angular/core';
import { Halls } from './halls.model';

@Injectable({
  providedIn: 'root'
})
export class HallsService {
  formData :Halls;

  constructor() { }
}
