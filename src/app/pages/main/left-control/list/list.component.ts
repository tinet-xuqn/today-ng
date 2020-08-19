import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { List } from '../../../../../domain/entities';
import { ListService } from '../../../../services/list/list.service';
import { TodoService } from '../../../../services/todo/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  @Input() isCollapsed: boolean;

  lists: List[];
  currentListUuid: string;
  contextListUuid: string;

  constructor(
    private listService: ListService,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }
  click(uuid: string): void {
    this.listService.setCurrentUuid(uuid);
  }

}
