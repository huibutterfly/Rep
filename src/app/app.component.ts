import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore';  // underScore.js


declare var $: any;  // jQuery
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private lists: object;
  constructor(
    private http: HttpClient,
  ) {}
  ngOnInit() {
    console.log($('#test').html());
    this.getData();
    console.log('now: ', _.now());
    console.log(_.map([1, 2, 3], function(num) { return num * 3; }));
  }
  getData() {
    const body = {};
    interface ItemsResponse {
      msg: string;
      result: boolean;
      data: One;
      count: number;
    }
    interface One {
      FK_product_id: number;
      price: number;
      product_name: string;
    }
    class HeroService {

    }
    this.http.get<ItemsResponse>('api/One/index').subscribe(res => {
      this.lists = res.data;
      console.log(this.lists);
    });
  }
}
