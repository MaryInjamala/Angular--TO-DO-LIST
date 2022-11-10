import { Component } from '@angular/core';
import list from 'src/app/model/list.json';
//import test from 'src/app/model/Test.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-todo-list';
  plan = list;
  isComplete = false;
  doTask: any = [];
  item: any = [];
  comp: any = [];
  isChecked = true;

  toDO() {
    this.doTask = list.filter((value: any) => value.done === false);
    // this.isAvailable = !this.isAvailable;
    return this.doTask;

  }

  completedItems() {
    this.comp = list.filter((value: any) => value.done === true);
    //this.isAvailable = false;
    return this.comp || false;
    debugger;
  }



}



