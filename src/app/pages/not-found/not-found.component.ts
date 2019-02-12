import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<h2>Page not found</h2>`,
  styles: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
