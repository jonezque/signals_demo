import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  effect,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-on-push-signal',
  templateUrl: './on-push-signal.component.html',
  styleUrls: ['./on-push-signal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushSignalComponent {
  private writeableSignalValue = signal(0);

  value: number | undefined;

  valueToCompute = computed(() => {
    const val = this.writeableSignalValue()
    console.log('signals', val)

    return 2 * val
  })

  constructor() {
    effect(() => {
      this.value = this.writeableSignalValue();
    });
  }

  update() {
    this.writeableSignalValue.update((x) => x + 1);
  }
}
