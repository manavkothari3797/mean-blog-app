import { Component, OnInit } from '@angular/core';
import { Portfolio } from './portfolio';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent extends Portfolio implements OnInit {
  url: string;

  constructor() {
    // Calling parent constructor
    super();

    // Getting url of current tab
    this.url = window.location.href;
  }

  ngOnInit(): void {
  }


  /**
   * Submitting form value
   */
  submit(): void {
    console.log(this.getContectFormValue());
  }

}
