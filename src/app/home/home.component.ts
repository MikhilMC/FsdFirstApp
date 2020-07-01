import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'FSD Program';
  isAvailable = false;
  name = "Your name";
  months = ["January", "February", "March", "April",
  "May", "June", "July", "August", "September",
  "October", "November", "December"];
  buttonClicked() {
    alert("Clicked");
  }
  value = ""
  keyUpDemo(event) {
    this.value = event.target.value;
    console.log(this.value);
  }
}
