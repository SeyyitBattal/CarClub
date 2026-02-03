import { Component, OnInit } from '@angular/core';
import { Posts } from '../../models/posts';
import { PostService } from '../../services/post-service/post-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
  standalone: true,
})

export class PostList implements OnInit{

  posts : Posts[] = [];
  errorMessage : string = '';

  constructor(private postService : PostService) {}

  ngOnInit(): void {
      this.loadPosts();
  }

  loadPosts() : void {
    this.postService.getAllPosts().subscribe({
      next : (data) => {
        this.posts = data;
        console.log("Posts loaded: ", data);
      },
      error : (error) => {
       this.errorMessage = "Loading failed!"
        console.error("Posts loading fail", error);
      }
    });
  }

  //For now, just posts showing is testing. CRUD features will update..
  
}
