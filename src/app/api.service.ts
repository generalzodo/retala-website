

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  wallet: any = new Subject();
  // base_url:any = "" 
  constructor(private apollo: Apollo) { }
  pullData(query, data) {
    return this.apollo
      .query({
        query: query,
        variables: data,
        errorPolicy: 'all'
      })

  }
  postData(query, postData) {
    return this.apollo
      .mutate({
        mutation: query,
        variables: postData,
        errorPolicy: 'all'

      })
  }
}
