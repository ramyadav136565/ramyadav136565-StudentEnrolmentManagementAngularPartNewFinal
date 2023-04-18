import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversitiyServiceService {
  url = "http://localhost:63832/"

  constructor(private Http:HttpClient) { }

  showAllUniversities():Observable<any>{
    return this.Http.get(this.url+"ShowAllUniversities");
  }
}

