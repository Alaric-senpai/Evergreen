import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  private message!: string;

  setmessage(mess:string){
    this.message = mess;
  }

  clearmessage(){
    this.message = "";
  }
}
