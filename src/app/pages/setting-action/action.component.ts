import { Component, OnInit } from '@angular/core';
import { Store } from '../../store/counter.store';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.less']
})
export class ActionComponent implements OnInit {

  constructor(
    public store: Store
  ) { }

  ngOnInit(): void {
  }

}
