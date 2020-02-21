import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currentUrl: string;
  constructor(private router: Router) {
    router.events
      .subscribe(
        (res: RouterEvent) => {
          console.log(res);
          if (res.url) {
            this.currentUrl = res.url;
            console.log(this.currentUrl);
          }
        }
      )
  }

  ngOnInit() {}
}
