import { Component, inject } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { CommentModel } from '../models/CommentModel';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [FormsModule, JsonPipe, CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
commentService = inject(CommentService)
Comments: CommentModel[] = []
ngOnInit()
{
  this.commentService.getComments().subscribe((data:CommentModel[])=>{
    console.log("comment data", data)
    this.Comments = data
  },(error)=>{
    console.log(error)
  })
}
copyRow(index: number)
{
this.Comments.splice(index, 0 , this.Comments[index])
}
resetRow(index: number)
{
  this.Comments[index] =new CommentModel()
}
deleteRow(index: number){
  this.Comments.splice(index, 1)
  console.log(this.Comments)
}
addRow()
{
  this.Comments.push(new CommentModel())
}

}
