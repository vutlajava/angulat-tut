import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name1 ='Ashok';
  name2 ='Ashok';

  getMessage(name1:string,name2:any) {

    return "First Name :"+name1+"  Second name :"+name2;
  }
}
