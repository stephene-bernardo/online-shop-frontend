import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authenticationService: AuthenticationService) { 
  }

  signin(){
    let {username, password} = this.loginForm.value
    this.authenticationService.login(username, password).subscribe(res => {
      localStorage.setItem("userid", res[0].userid);
      localStorage.setItem("username", res[0].loginname);
    })
  }

  ngOnInit(): void {
  }

}
