import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GobackService {

  constructor(private location:Location) { }

  goback(){
    this.location.back();
  }
}
