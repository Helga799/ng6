import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import { trigger,style,transition,animate,query,stagger  } from '@angular/animations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [
    trigger('listStagger',[
      transition('* <=> *', [
        query(':enter',
          [
            style({opacity: 0, transform: 'translateY(-15px)'}),
            stagger('50ms',
              animate('550ms ease-out',
                style({opacity: 1, transform: 'translateY(0px)'})))
          ], {optional: true}),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
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
