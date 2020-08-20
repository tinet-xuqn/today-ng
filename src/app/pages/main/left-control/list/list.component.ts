import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzModalService } from 'ng-zorro-antd/modal';
import { List } from '../../../../../domain/entities';
import { ListService } from '../../../../services/list/list.service';
import { TodoService } from '../../../../services/todo/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit, OnDestroy {

  @Input() isCollapsed: boolean;
  @ViewChild('listRenameInput') private listRenameInput: ElementRef;
  @ViewChild('listInput') private listInput: ElementRef;

  lists: List[];
  currentListUuid: string;
  contextListUuid: string;
  addListModalVisible = false;
  renameListModalVisible = false;

  private destroy$ = new Subject();
  constructor(
    private listService: ListService,
    private todoService: TodoService,
    private nzContextMenuService: NzContextMenuService,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.listService.lists$
      .pipe(takeUntil(this.destroy$))
      .subscribe(lists => this.lists = lists);
    this.listService.currentUuid$
      .pipe(takeUntil(this.destroy$))
      .subscribe(uuid => this.currentListUuid = uuid);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
  click(uuid: string): void {
    this.listService.setCurrentUuid(uuid);
  }
  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent, uuid: string): void {
    this.nzContextMenuService.create($event, menu);
    this.contextListUuid = uuid;
  }

  close(): void {
    this.nzContextMenuService.close();
  }

  openAddListModal(): void {
    this.addListModalVisible = true;
    setTimeout(() => {
      this.listInput.nativeElement.focus();
    });
  }
  openRenameListModal(): void {
    this.renameListModalVisible = true;
    setTimeout(() => {
      const title = this.lists.find(l => l._id === this.contextListUuid).title;
      console.log(title);
      this.listRenameInput.nativeElement.value = title;
      this.listRenameInput.nativeElement.focus();
    });
  }

  closeAddListModal(): void {
    this.addListModalVisible = false;
  }
  closeRenameListModal(): void {
    this.renameListModalVisible = false;
  }

  add(title: string): void {
    this.listService.add(title);
    this.closeAddListModal();
  }
  rename(title: string): void {
    this.listService.rename(this.contextListUuid, title);
    this.closeRenameListModal();
  }
  delete(): void {
    const uuid = this.contextListUuid;
    this.modal.confirm({
      nzTitle: '确认删除列表',
      nzContent: '该操作会导致该列表下的所有待办事项被删除',
      nzOnOk: () => {
        new Promise((res, rej) => {
          this.listService.delete(uuid);
          this.todoService.deleteInList(uuid);
          res();
        })
        .catch(() => console.error('faild'));
      }
    });
  }
}
