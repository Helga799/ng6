import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl:  './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  userId: string;
  user: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe( params => this.userId = params.id)
  }

  ngOnInit() {
    this.dataService.getUserById(this.userId)
      .subscribe(
        data => this.user = data,
        err => console.log(err)
      )
  }
}
