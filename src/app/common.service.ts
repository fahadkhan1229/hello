import {Injectable} from '@angular/core';
// import { Observable } from 'rxjs/internal/Observable';
import {BehaviorSubject} from 'rxjs';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {Leads} from './model/leads';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Access-Control-Allow-Origin': '*',

//     'Content-Type': 'application/json'
//   })
// };

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
  })
};
// const apiUrl = "http://api.leadslogics.com/api/leads";
const apiUrl = "http://127.0.0.1:8000/api/leads";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient) {
  }

  leads: Leads;

  leadByDomain(leads: Leads): Observable<Leads> {
    return this.http.post<Leads>(`http://api.leadslogics.com/api/leads`, leads);
  }

  leadByName(leads: Leads): Observable<Leads> {
    return this.http.post<Leads>(`http://api.leadslogics.com/api/leadByName`, leads);
  }

}
