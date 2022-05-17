import { Observable } from 'rxjs/internal/Observable';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {
  private apiUrl = environment.API

  constructor(private http: HttpClient) { }

  public getAdvice(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
