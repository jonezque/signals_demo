import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-on-push-rxjs',
  templateUrl: './on-push-rxjs.component.html',
  styleUrls: ['./on-push-rxjs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushRxjsComponent implements OnInit {
  private value$ = new BehaviorSubject(0);

  value: number | undefined;

  valueToCompute$ = this.value$.pipe(map(x => {
    console.log('rxjs map', x)
    return 2 * x;
  }))

  constructor() {}

  ngOnInit(): void {
    this.value$.subscribe((x) => {
        this.value = x;
    });
  }

  update() {
    this.value$.next(this.value$.value + 1);
  }
}
