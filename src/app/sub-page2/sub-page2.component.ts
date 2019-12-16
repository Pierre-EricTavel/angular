import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { of} from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sub-page2',
  templateUrl: './sub-page2.component.html',
  styleUrls: ['./sub-page2.component.css']
})
export class SubPage2Component implements OnInit {

  id = '';
  user:any;
  constructor(private route: ActivatedRoute, @Injectable() private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.pipe(switchMap(paramMap => of(paramMap.get('id'))))
    .subscribe((d) => {
      this.id = d;
      this.http
        .get('http://jsonplaceholder.typicode.com/users/' + this.id)
        .subscribe(res =>
        {
            this.user=res;
        });
    });
  }

}
