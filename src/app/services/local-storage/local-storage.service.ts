import { Injectable } from '@angular/core';

const ls = localStorage;
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public get<T>(key: string): T {
    return JSON.parse(ls.getItem(key)) as T;
  }

  public getList<T>(key: string): any {
    const before = ls.getItem(key);
    return before ? (JSON.parse(before) as T[]) : [];
  }

  public set(key: string, value: any): void {
    if (value === undefined) {
      return;
    }
    ls.setItem(key, JSON.stringify(value));
  }
}
