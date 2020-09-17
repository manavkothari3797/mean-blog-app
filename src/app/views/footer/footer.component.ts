import { Component, OnInit } from '@angular/core';
import { FOOTER } from '../../core/constants/constants';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private footerFields = FOOTER.FIELDS;
  
  constructor() { }

  ngOnInit() {
  }

}
