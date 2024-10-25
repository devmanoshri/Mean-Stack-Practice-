import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from '../../../model/post.model';
@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent {
  // posts: Post[] = [
  //   {
  //     id:1,
  //     title: 'First Post',
  //     content: 'This is the first post',
  //   },
  //   {
  //     id:2,
  //     title: 'Second Post',
  //     content: 'This is the Second post',
  //   },
  //   {
  //     id:3,
  //     title: 'Third Post',
  //     content: 'This is the Third post',
  //   },
  // ];
  posts: Post[] = [];
}
