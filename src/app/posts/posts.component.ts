import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Object;

  constructor(
    private dataService: DataService,
    ) { }
  ngOnInit() {
    this.dataService.getPosts().
    subscribe(
      data => {
        console.log(data);
        this.posts = data
      },
      err => console.log(err)
    )
  }
}
