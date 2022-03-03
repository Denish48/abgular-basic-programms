import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'moduleimpexp';
  getalert(name: string) {
    alert(name);
  }
  inp_value = '';
  getinputvalue(data: any) {
    // console.log(data)
    this.inp_value = data;
  }
  disabledbox = true;
  enablebox() {
    this.disabledbox = false;
  }
  condition = 'red';
  changecondition() {
    this.condition = 'green';
  }
  holiday = '';
  getholiday(name: string) {
    // console.log("hey")
    this.holiday = name.toLowerCase();
  }
}
