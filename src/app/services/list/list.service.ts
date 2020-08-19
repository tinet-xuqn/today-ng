import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { List } from '../../../domain/entities';
import { LISTS } from '../local-storage/local-storage.namespace';

type SpecialListUUID = 'totay' | 'todo';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private current: List;
  private lists: List[] = [];
  currentUuid: SpecialListUUID | string = 'today';

  current$ = new Subject<List>();
  lists$ = new Subject<List[]>();
  currentUuid$ = new Subject<string>();

  constructor(
    private store: LocalStorageService
  ) { }

  private broadCast(): void {
    this.lists$.next(this.lists);
    this.current$.next(this.current);
    this.currentUuid$.next(this.currentUuid);
  }

  private persist(): void {
    this.store.set(LISTS, this.lists);
  }

  private getByUuid(uuid: string): List {
    return this.lists.find(l => l._id === uuid);
  }

  private update(list: List): void {
    const index = this.lists.findIndex(l => l._id === list._id);
    if (index === -1) {
      this.lists.splice(index, 1, list);
      this.persist();
      this.broadCast();
    }
  }

  getCurrentListUuid(): SpecialListUUID | string {
    return this.currentUuid;
  }

  getAll(): void {
    this.lists = this.store.getList(LISTS);
    this.broadCast();
  }

  setCurrentUuid(uuid: string): void {
    this.currentUuid = uuid;
    this.current = this.lists.find(l => l._id === uuid);
    this.broadCast();
  }

  add(title: string): void {
    const newList = new List(title);
    this.lists.push(newList);
    this.currentUuid = newList._id;
    this.current = newList;

    this.broadCast();
    this.persist();
  }

  rename(listUuid: string, title: string): void {
    const list = this.getByUuid(listUuid);
    if (list) {
      list.title = title;
      this.update(list);
    }
  }

  delete(uuid: string): void {
    const index = this.lists.findIndex(l => l._id === uuid);
    if (index !== -1) {
      this.lists.splice(index, 1);
      this.currentUuid = this.lists.length
        ? this.lists[0]._id
        : this.currentUuid === 'today' ? 'today' : 'todo';

      this.broadCast();
      this.persist();
    }
  }
}

