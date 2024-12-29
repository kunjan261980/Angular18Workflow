import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CommentModel } from '../models/CommentModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }
  commentHttp = inject(HttpClient)
  getComments(): Observable<CommentModel[]>
  {
    return this.commentHttp.get<CommentModel[]>('https://jsonplaceholder.typicode.com/comments')
  }
}
