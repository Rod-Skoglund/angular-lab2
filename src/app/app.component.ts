import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'Lab2-5551',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {

  onSubmit(form: NgForm) {
    window.alert('You requested weather info for ' + form.value.cityName + ', ' + form.value.stateName);
  }
}

