import { Component } from '@angular/core';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone:true,
  imports: [CommonModule,FormsModule,RouterModule,RouterLink,RouterLinkActive],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent{

  constructor(private userService:UserService, private router: Router){}
  
  model:User=new User();
  message:string="";
  register(){
    this.userService.userRegisterService(this.model).subscribe({
      next: (response) => {
        this.message = response; 
        this.router.navigate(['/']); 
      },
      error: (err) => {
        this.message = `Error: ${err.error.message || 'Something went wrong!'}`; // Error message
      }
    });
  }
}
