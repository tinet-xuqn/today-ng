import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
@Component({
  selector: 'app-right-control',
  templateUrl: './right-control.component.html',
  styleUrls: ['./right-control.component.less']
})
export class RightControlComponent implements OnInit {
  @ViewChild(TodoComponent) public todoList: TodoComponent;
  constructor() {
  }

  ngOnInit(): void {
  }
  add(title: string): void {
    this.todoList.add(title);
  }
}
