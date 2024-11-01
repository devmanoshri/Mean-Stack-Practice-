import { Injectable } from '@angular/core';
import { Post } from '../../model/post.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts(): Observable<{ message: string; posts: Post[] }> {
    return this.http.get<{ message: string; posts: Post[] }>(
      'http://localhost:3000/api/posts'
    );
    // .subscribe((resData) => {
    //   this.posts = resData.post;

    //   this.postsUpdated.next([...this.posts]);
    // });
  }
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(id: string, title: string, content: string) {
    const post: Post = {
      id: '',
      title: title,
      content: content,
    };
    this.posts.push(post);
    console.log(post);
    this.postsUpdated.next([...this.posts]);

    // this.http
    //   .post<{ message: string }>('http://localhost:3000/api/posts', post)
    //   .subscribe((resData) => {
    //     console.log(resData.message);
    //     this.posts.push(post);
    //     this.postsUpdated.next([...this.posts]);
    //   });
  }
}
