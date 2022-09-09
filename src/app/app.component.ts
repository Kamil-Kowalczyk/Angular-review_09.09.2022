import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Review 4P';
  counter: number = 0;
  urlImg1: string = "assets/images/tree.png";
  urlImg2: string = "assets/images/mountains.png";
  urlImg3: string = "assets/images/eyeofcthulhu.png";
  courses: string[] = [
    "Coding in JS",
    "Algorithms",
    "Project menagment"
  ];
  isActive: boolean = true;

  enlarge() : void {
    this.counter++;
  }
  changeVisibility() : void {
    this.isActive = !this.isActive;
  }
}
