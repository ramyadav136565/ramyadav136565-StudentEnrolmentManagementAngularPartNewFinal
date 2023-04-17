import { Component, EventEmitter, Output } from '@angular/core';
import {LoginService} from '../login/loginServices'

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {
  @Output() menuClicked = new EventEmitter<boolean>();

}
