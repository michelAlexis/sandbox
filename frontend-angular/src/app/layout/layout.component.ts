import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { LayoutManager } from './layout.manager';

@UntilDestroy()
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {

  @ViewChild(MatSidenav, {static: true}) private sidenav: MatSidenav;

  constructor(public layoutManager: LayoutManager) {}

  ngOnInit(): void {
    this.layoutManager.toggleLeftMenu$.pipe(
      untilDestroyed(this)
    ).subscribe(() => {
      this.sidenav.toggle();
    })
  }
}
