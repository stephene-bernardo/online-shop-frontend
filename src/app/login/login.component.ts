import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  errorMsg="";

  constructor(private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) { 
     
  }

  signin(){
    let {username, password} = this.loginForm.value
    this.authenticationService.login(username, password).subscribe(res => {
      if(!res["passport"].user[0]){
        this.errorMsg = 'Invalid Credentials!'
        this.loginForm.patchValue({
          username:'',
          password:''
        })
      } else {
        this.router.navigate(['/']);
      }
    })
  }

  ngOnInit(): void {
    this.authenticationService.getProfile().subscribe(res=>{
      if(res["passport"].user[0]){
        this.router.navigate(['']);
      }
    }, err => {
    })
  }

}
