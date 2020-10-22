import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private httpClient: HttpClient
  ) { }

  get(url): Observable<any>{
    return this.httpClient.get(url);
  }

  post(url, body){
    return this.httpClient.post(url, {body});
  }

  put(url,body){
    return this.httpClient.put(url, {body});
  }

  delete(url){
    return this.httpClient.delete(url);
  }
}
