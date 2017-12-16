import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = [
    {seqNum: 1, notes: 'Some fairly long note text'},
    {seqNum: 2, notes: 'Foo bar baz lorem ipsum yadda yadda'}
  ];
}
