import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const queryOptions = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    Accept: 'text/html, application/xhtml+xml, */*',
  },
  responseType: 'json' as 'json',
  //responseType: 'blob' as 'json',
};

@Injectable({
  providedIn: 'root',
})

export class apiService {


  constructor(private http: HttpClient) {

  }


}
