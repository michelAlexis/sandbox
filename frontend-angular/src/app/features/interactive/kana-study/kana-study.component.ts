import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { COL_SIZE, getKana, Kana, ROW_SIZE } from './kana-sudy.constant';

@Component({
  templateUrl: './kana-study.component.html',
  styleUrls: ['./kana-study.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanaStudyComponent implements OnInit {
  public readonly ROW_SIZE = ROW_SIZE;
  public readonly COL_SIZE = COL_SIZE;

  constructor() {}

  ngOnInit(): void {}

  getKana(i: number, j: number): Kana {
    return getKana(i, j);
  }
}
