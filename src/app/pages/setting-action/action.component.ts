import { Component, OnInit } from '@angular/core';
import { Store } from '../../store/counter.store';
import { autorun, when, reaction } from 'mobx';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.less']
})
export class ActionComponent implements OnInit {

  constructor(
    public store: Store
  ) {
    autorun(() => {
      console.log(store.total);
    });

    when(() => store.total > 100, () => {
      console.log('没钱了！');
    });

    reaction(() => [store.price, store.amount], arr => {
      console.log(arr);
    });
  }

  ngOnInit(): void {
  }

}
