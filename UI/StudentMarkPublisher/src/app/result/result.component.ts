  import { CommonModule } from '@angular/common';
  import { Component, OnInit } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { RouterLink, RouterLinkActive } from '@angular/router';
  import { UserService } from '../services/user.service';

  @Component({
    selector: 'app-result',
    standalone:true,
    imports: [RouterLink,RouterLinkActive,CommonModule,FormsModule],
    templateUrl: './result.component.html',
    styleUrl: './result.component.css'
  })
  export class ResultComponent implements OnInit {
    studentDetails: any[] = []; 

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    
    this.userService.GetAllMarksTeacher().subscribe(
      (data) => {
        this.studentDetails = data; 
      },
      (error) => {
        console.error('Error fetching marks data', error); 
      }
    );
  }

  GetAllMarksTeacher(): void {
    this.userService.GetAllMarksTeacher().subscribe(
      (data) => {
        this.studentDetails = data;
      },
      (error) => {
        console.error('Error fetching marks data', error);
      }
    );
  }
  

  deleteStudent(id: number) {
    this.userService.deleteStudent(id).subscribe({
      next: (response) => {
        alert(response); 
        this.GetAllMarksTeacher(); 
      },
      error: (error) => {
        alert(error.error); 
      }
    });
  }
  
  }
