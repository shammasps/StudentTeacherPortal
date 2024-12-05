import { Component } from '@angular/core';
import { Router,RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userService:UserService, private router: Router){}
  model:User=new User();
  message:string="";
  
  login(){
    this.userService.userLoginService(this.model).subscribe({
      next: (response) => {
        this.message = response;

        localStorage.setItem("user",JSON.stringify(this.model))

        if (this.model.role === 'Teacher') {
          this.router.navigate(['/Result']);
        } else if (this.model.role === 'Parent') {
          this.router.navigate(['/Home']);
        }
      },
      error: (err) => {
        this.message = `Error: ${err.error.message || 'Something went wrong!'}`;
      }
    });
  }
}
