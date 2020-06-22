import { Component, OnInit } from '@angular/core';

import {CatalogCoursesService} from './service/catalog-courses.service';
import {DateService} from './service/date-service.service';
import { CatalogResponse } from './payloads/GetCategoryResponse';
import { CoursesResponse } from './payloads/GetAllCourses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public catList : CatalogResponse;
  public courses : CoursesResponse[];
  public filteredCourses : CoursesResponse[];
  public filterKeyword : string; 
  private selectedCategory : string;
  public registrationCount : number;

  constructor(private catService : CatalogCoursesService, private dateService :  DateService){
    this.filterKeyword = "";
    this.selectedCategory = "All";
    this.registrationCount = 0;
  }

  ngOnInit(){
    this.catList = this.catService.getCatList();
    this.courses = this.catService.getAllCourses();
    this.filteredCourses = this.courses;
    this.getRegistrationStatus();
  }

  filterByCategory(cat : string){
    if(cat == "All"){
      this.filteredCourses = this.courses;
    }else{
      this.filteredCourses =  this.courses.filter((course) => {
        if(course.category === cat){
          return course;
        }
      });
    }
    this.selectedCategory = cat;
    this.getRegistrationStatus();
  }

  filterByKeyword(text : string){
    if(text == ""){
      this.filterByCategory(this.selectedCategory);
    }else{
      this.filteredCourses =  this.filteredCourses.filter((course) => {
        if(course.title.toLocaleUpperCase().indexOf(text.toUpperCase()) != -1){
          return course;
        }else if(course.instructor_name.toUpperCase().indexOf(text.toUpperCase()) != -1){
          return course;
        }
      });
    }
    this.getRegistrationStatus();
  }

  getRegistrationStatus(){
    this.registrationCount = 0;
    for(var i=0;i<this.filteredCourses.length;i++){
      let data = this.filteredCourses[i];
      let status = this.dateService.getRegistrationStatus(data.start_date, data.end_date);
      data.registration_status = status;
    }
  }


}
