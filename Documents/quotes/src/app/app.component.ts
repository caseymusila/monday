import { Component } from '@angular/core';
import { Goals } from './goals';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goal:Goals[]=
  [
{
  id:1,name:"i want to finish this project at 9"
}
  ]
}
