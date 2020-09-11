import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  constructor(private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) { 
  }

  signin(){
    let {username, password} = this.loginForm.value
    this.authenticationService.login(username, password).subscribe(res => {
      localStorage.setItem("userid", res[0].userid);
      localStorage.setItem("username", res[0].loginname);
      this.router.navigate(['']);

    })
  }

  ngOnInit(): void {
    console.log("asdas")
  }

}