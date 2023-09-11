import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
} from '@angular/core';
import { interval } from 'rxjs';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdditionalComponent {
  // toSignal
  counter$ = interval(1000);
  counter = toSignal(this.counter$, { initialValue: 0 });

  // toObservable
  value = signal(42);
  value$ = toObservable(this.value);

  // lazy
  valueA = signal(10);
  valueB = computed(() => {
    console.log('valueB');
    return this.valueA() * 2;
  });

  valueC = computed(() => {
    console.log('valueC');
    return this.valueA() * 2;
  });

  // array of deps
  value1 = signal(0)
  value2 = signal(0)
  value3 = computed(() => this.value1() + this.value2())
  update(idx: string) {
    if (idx === '1') {
      this.value1.update( x=> x+1)
    } else {
      this.value2.update( x=> x+1)
    }
  }

  // effect
  effect = effect(() => {
    console.log(this.value1())
    console.log(this.value2())
  })
}
