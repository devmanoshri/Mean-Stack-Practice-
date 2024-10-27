import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from '../../../model/post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MatExpansionModule,CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit, OnDestroy {
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

  //@Input() posts: Post[] = [];

  posts: Post[] = [];
  private postsSub!: Subscription ;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
