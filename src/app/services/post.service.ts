import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  postHttp = inject(HttpClient)

  getPosts(): Observable<PostModel[]>
  {
    return this.postHttp.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
