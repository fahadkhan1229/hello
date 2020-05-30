import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login = {
    email: undefined,
    password: undefined,
    fullName: undefined

  };
  errorMessage: boolean;

  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit() {
  }


  onSubmit() {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this.auth.login(this.login.email, this.login.password).subscribe(() => {
        this.router.navigate(['./dashboard']);
      }, error => {
        this.errorMessage = true;
      }
    );
  }
}
