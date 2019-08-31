import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-weather-request',
  templateUrl: './weather-request.component.html',
  styleUrls: ['./weather-request.component.css'],

  template: `
    City Name: {{city}}
    State Name: {{state}}
  `
})
export class WeatherRequestComponent implements OnInit {
  @Input('cityName') city: string;
  @Input('stateName') state: string;
  constructor() { }

  ngOnInit() {
  }

}