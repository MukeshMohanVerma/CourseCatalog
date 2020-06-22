import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

   private today : Date;

  constructor() { 
    this.today = new Date();
    this.today.setHours(0,0,0,0);
  }

  getRegistrationStatus(startDate : Date, endDate : Date){
    startDate.setHours(0,0,0,0);
    endDate.setHours(0,0,0,0);
    if(this.today.getTime() < startDate.getTime()){
      return "Pre-registration";
    }else if(this.today.getTime() > startDate.getTime() && this.today.getTime() < endDate.getTime()){
      return "Ongoing";
    }else if(this.today.getTime() > startDate.getTime() && this.today.getTime() > endDate.getTime()){
      return "Completed";
    }
  }

}
