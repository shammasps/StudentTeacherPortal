import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterModule,RouterLink,RouterLinkActive,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  studentDetails: any[] = []; 

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    let userStr = localStorage.getItem("user")
    if (!userStr){
      alert("No Login Data")
      return ;
    }
    let user = JSON.parse(userStr)
    // Call the service to get the marks data
    this.userService.GetMarksParent(user.userName).subscribe(
      (data) => {
        this.studentDetails = data; 
      },
      (error) => {
        console.error('Error fetching marks data', error);
      }
    );
  }
}
