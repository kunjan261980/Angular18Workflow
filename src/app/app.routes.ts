import { Routes } from '@angular/router';

export const routes: Routes = [
    // {path:"", redirectTo:"posts", pathMatch:"full"},
    {path:"posts", loadComponent: ()=>import('./post/post.component').then(c=>c.PostComponent)},
    {path:"comments", loadComponent: ()=>import('./comment/comment.component').then(c=>c.CommentComponent)}
];
