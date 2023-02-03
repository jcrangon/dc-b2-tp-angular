import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiRoot = 'https://geo.api.gouv.fr/'

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
