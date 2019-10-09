import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise 3';
  firstName ='';
  myMethod(){
    console.log("you see consol now, length is:" + this.firstName.length);
  }
}
