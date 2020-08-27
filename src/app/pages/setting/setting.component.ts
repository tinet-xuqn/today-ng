import { Component, OnInit } from '@angular/core';
import { Store } from '../../store/counter.store';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less']
})
export class SettingComponent implements OnInit {

  constructor(
    public store: Store
  ) { }

  ngOnInit(): void {
  }

}
