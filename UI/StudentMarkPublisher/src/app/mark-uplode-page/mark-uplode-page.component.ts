import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-mark-uplode-page',
  standalone:true,
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './mark-uplode-page.component.html',
  styleUrl: './mark-uplode-page.component.css'
})
export class MarkUplodePageComponent implements OnInit {
  constructor(private userService:UserService, private router: Router){}
  model:User=new User();
  message:string="";
  // Mock data for batches
  batches = ['BSc Computer Science', 'BCA', 'BTech'];
  parents:User[] = [];
  ngOnInit(): void {
    this.userService.getAllParents().subscribe({
      next: (response) => {
        this.parents = response 
      },
      error: (err) => {
        alert(err)
      }
    });
  }
  submitMarks(){

    this.userService.markUplode(this.model).subscribe({
      next: (response) => {
        this.message = response; 
        this.router.navigate(['/Result']); 
      },
      error: (err) => {
        this.message = `Error: ${err.error.message || 'Something went wrong!'}`; 
      }
    });
  }
}
