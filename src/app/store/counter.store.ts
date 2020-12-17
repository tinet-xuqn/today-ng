import { observable, computed, action } from 'mobx-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class Store {
  @observable price = 0;
  @observable amount = 0;
  @computed get total(): number {
    return this.price * this.amount;
  }
  @action amountAction(): void {
    this.amount++;
  }
  @action priceAction(): void {
    this.price++;
  }
}
