import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tok: void;

  constructor(private jwtHelper: JwtHelperService, private router: Router, private http: HttpClient) {
  }

  public get loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
    // return !token;

  }

  public static tokenGetter(): string {
    return localStorage.getItem('token');
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<{ access: string }>('http://api.leadslogics.com/api/login', {
      email,
      password
    }).pipe(tap(res => {
      console.log('the token is' + JSON.stringify(res));
      localStorage.setItem('token', JSON.stringify(res));
      this.router.navigate(['/dashboard']);
    }));
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
