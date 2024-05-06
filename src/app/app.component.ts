import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'upc2401si729eau20211g163';
  options = [
    { path: '/home', title: 'Home'},
    { path: '/nursing/mental-state-exams', title: 'Mental State Exams'},
  ]
}
