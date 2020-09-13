import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faUser=faUser
  title = 'online-shop-frontend';
  username:string= '';
  
  constructor(private route: ActivatedRoute,
    private router: Router, private auth:AuthenticationService){

  }
  onActivate(res){
    this.auth.getProfile().subscribe(res => {
      if(res["passport"].user ){
        this.username = res["passport"].user[0].loginname
      }
    }, rej=>{
      this.username = ''
    })
  }

  logout(){
    this.auth.logout().subscribe(res=>{
      this.username = "";
      this.router.navigate(['/login']);
    }, err=>{
      this.username = "";
      this.router.navigate(['/login']);
    })


  }
}
