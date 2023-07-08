import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  implements OnInit {
  postList: Post[] = []

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((posts) => {
      this.postList = posts
    })
  }

}
