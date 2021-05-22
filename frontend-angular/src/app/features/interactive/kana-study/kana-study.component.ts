import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-kana-study',
  templateUrl: './kana-study.component.html',
  styleUrls: ['./kana-study.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanaStudyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
