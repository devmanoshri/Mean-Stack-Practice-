import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from '../../../model/post.model';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit, OnDestroy {
  //@Input() posts: Post[] = [];

  posts: Post[] = [];

  private postsSub: any;
  private postsSub2: any;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.postsSub = this.postsService.getPosts().subscribe({
      next: (postData: { message: string; posts: Post[] }) => {
        this.posts = postData.posts;
      },
      error: () => {},
    });

    this.postsSub2 = this.postsService
      .getPostUpdateListener()
      .subscribe((postsData: Post) => {
        this.posts = this.posts.concat(postsData);
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
    this.postsSub2.unsubscribe();
  }
}
