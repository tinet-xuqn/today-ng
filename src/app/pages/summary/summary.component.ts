import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';
import { SummaryService } from './summary.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import {
  START_USING_DATE,
  USERNAME
} from '../../services/local-storage/local-storage.namespace';
import { getTodayTime, ONE_DAY } from '../../../utils/time';
import { Summary } from '../../../domain/entities';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.less']
})
export class SummaryComponent implements OnInit {
  date = new Date();
  mode: NzCalendarMode = 'month';

  username = this.store.get(USERNAME) || 'username';
  dateCount = Math.floor((getTodayTime() - (this.store.get(START_USING_DATE) as number)) / ONE_DAY + 1);
  constructor(
    private summaryService: SummaryService,
    private store: LocalStorageService,
    private router: Router,
    private noti: NzNotificationService,
  ) { }

  ngOnInit(): void {
    this.summaryService.doSummary();
  }
  requestForDate(date: Date): Summary | null {
    return this.summaryService.summaryForDate(date.getTime());
  }

  showSummaryDetail(summary: Summary): void {
    if (!summary) {
      return;
    }
    const { cCount, uCount } = summary;
    if (uCount) {
      this.noti.error('有未完成的项目', `你完成了全部任务的 ${cCount / (cCount + uCount)}%`);
    } else if (cCount) {
      this.noti.success('完成了这一天的全部任务', '干得漂亮');
    }
  }
  goBack(): void {
    this.router.navigateByUrl('/main');
  }
  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode);
  }
}
