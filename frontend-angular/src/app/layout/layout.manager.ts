import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutManager {

  public readonly isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay(1)
  );

  public readonly toggleLeftMenu$ = new Subject<void>();

  constructor(private breakpointObserver: BreakpointObserver) { }

  public toggleLeftMenu() {
    this.toggleLeftMenu$.next();
  }
}
