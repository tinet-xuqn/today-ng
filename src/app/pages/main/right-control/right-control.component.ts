import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { Todo } from 'src/domain/entities';
@Component({
  selector: 'app-right-control',
  templateUrl: './right-control.component.html',
  styleUrls: ['./right-control.component.less']
})
export class RightControlComponent implements OnInit, AfterViewInit {
  @ViewChild(TodoComponent)
  private todoList: TodoComponent;

  todos(): Todo[] {
    return [];
  }
  constructor() {
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.todos = () => this.todoList.todos;
    }, 0);
  }
  add(title: string): void {
    this.todoList.add(title);
  }
}
