import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './model/Video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-video';
  
  ngOnInit(){
  }
}
