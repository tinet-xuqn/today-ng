import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RankBy } from '../../../../../domain/type';
import { ListService } from '../../../../services/list/list.service';
import { TodoService } from '../../../../services/todo/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  private listTitle$: Subscription;
  listTitle = '';

  constructor(
    private lsitService: ListService,
    private todoService: TodoService,
  ) { }

  ngOnInit(): void {
    this.listTitle$ = this.lsitService.current$.subscribe(list => {
      this.listTitle = list ? list.title : '';
    });
  }

  switchRankType(r: RankBy): void {
    console.log(r);
    this.todoService.toggleRank(r);
  }

}
