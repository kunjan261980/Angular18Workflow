import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { CommentService } from './services/comment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostComponent, CommentComponent, RouterLink, RouterLinkActive, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  router = inject(Router)
  title = 'angular18workflow';
}
