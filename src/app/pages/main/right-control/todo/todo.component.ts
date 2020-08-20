import { Component, OnInit, OnDestroy } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TodoService } from '../../../../services/todo/todo.service';
import { ListService } from '../../../../services/list/list.service';
import { floorToDate, getTodayTime } from '../../../../../utils/time';
import { Todo, List } from '../../../../../domain/entities';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit, OnDestroy {
  private destory$ = new Subject();

  todos: Todo[] = [];
  lists: List[] = [];
  currentContextTodo: Todo;

  constructor(
    private listService: ListService,
    private todoService: TodoService,
    private nzContextMenuService: NzContextMenuService,
  ) { }

  ngOnInit(): void {
    this.listService.lists$
      .pipe(takeUntil(this.destory$))
      .subscribe(lists => {
        this.lists = lists;
      });
    combineLatest([this.listService.currentUuid$, this.todoService.todo$])
      .pipe(takeUntil(this.destory$))
      .subscribe(sources => {
        this.processTodos(sources[0], sources[1]);
      });
    this.todoService.getAll();
    this.listService.getAll();
  }
  ngOnDestroy(): void {
    this.destory$.next();
  }

  private processTodos(listUUID: string, todos: Todo[]): void {
    const filteredTodos = todos.filter(todo => {
      return (
        (listUUID === 'today' && todo.planAt && floorToDate(todo.planAt) <= getTodayTime())
        || (listUUID === 'todo' && (!todo.listUUID || todo.listUUID === 'todo'))
        || (listUUID === todo.listUUID)
      );
    }).map(todo => Object.assign({}, todo) as Todo);

    this.todos = [].concat(filteredTodos);
  }

  add(title: string): void {
    this.todoService.add(title);
  }

  contextMenu($event: MouseEvent, contextTemplate: NzDropdownMenuComponent, uuid: string): void {
    this.nzContextMenuService.create($event, contextTemplate);
    this.currentContextTodo = this.todos.find(t => t._id === uuid);
  }

  listsExcept(listUUID: string): List[] {
    return this.lists.filter(l => l._id !== listUUID);
  }

  toggle(uuid: string): void {
    this.todoService.toggleTodoComplete(uuid);
  }

  delete(): void {
    this.todoService.delete(this.currentContextTodo._id);
  }

  setToday(): void {
    this.todoService.setTodoToday(this.currentContextTodo._id);
  }

  moveToList(listUuid: string): void {
    this.todoService.moveToList(this.currentContextTodo._id, listUuid);
  }

  close(): void {
    this.nzContextMenuService.close();
  }
  click(): void {

  }
}
