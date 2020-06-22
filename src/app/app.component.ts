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
  }

}
