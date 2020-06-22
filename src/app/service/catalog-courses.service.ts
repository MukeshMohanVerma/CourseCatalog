import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogResponse } from '../payloads/GetCategoryResponse';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CoursesResponse } from '../payloads/GetAllCourses';

@Injectable({
  providedIn: 'root'
})
export class CatalogCoursesService {
  
  private categories;
  private secret;

  constructor(private httpclient : HttpClient) {
    this.categories = ["Mathematics","Engineering","Computer"];
    this.secret = "HelloMars";
  }
  getCatList() {

    // this.httpclient.get("https://frontend-hiring.appspot.com/all_categories?secret="+this.secret);
    const catList : CatalogResponse = {
      status      :       200,
      message     :       "Ok",
      payload     :       this.categories,
    }
    return catList;
  }

  getAllCourses(){
    // this.httpclient.get("https://frontend-hiring.appspot.com/all_courses?secret="+this.secret);
    const courses = [];
    const instructors = ["Hello C","Prof A","Prof B","Prof C"];
    const courseStartDates = ["June 26, 2020","June 20, 2020","June 15, 2020","June 28, 2020"];
    const courseEndDates = ["July 26, 2020","June 26, 2020","June 20, 2020","July 20, 2020"];
    const desc = "This is course description, This is course description, This is course description, This is course description";
    const workloads = ["4 weeks course, 4 hrs per day","5 weeks course, 3 hrs per day","1 weeks course, 2 hrs per day","4 weeks course, 2 hrs per day"]
    for(let i=0;i<4;i++){
      let cat = "";
      if(i==3){
        cat = this.categories[0];
      }else{
        cat = this.categories[i];
      }
      const course : CoursesResponse = {
        category            :       cat,
        description         :       desc, 
        end_date            :       new Date(courseEndDates[i]), 
        title               :       "Course " + (i+1), 
        estimated_workload  :       workloads[i], 
        instructor_name     :       instructors[i], 
        start_date          :       new Date(courseStartDates[i]),
        registration_status :       ""
      }
      courses.push(course);
    }
    return courses;

  }
}
