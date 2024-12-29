import { Component, inject } from '@angular/core';
import { PostService } from '../services/post.service';
import { PostModel } from '../models/PostModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
postService = inject(PostService)
Posts: PostModel[] = []
ngOnInit()
{
  this.postService.getPosts().subscribe((data:PostModel[])=>{
    console.log("post data", data)
    this.Posts = data;
  },(error)=>{
    console.log(error)
  })
}
}
