import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
    private router: Router){

  }
  onActivate(res){
    this.username = localStorage.getItem('username')
  }

  logout(){
    this.username = "";
    localStorage.clear();
    this.router.navigate(['/login']);

  }
}
