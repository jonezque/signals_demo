import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs_signals_demo';

  buttons = [
    { name: 'ONPUSH RXJS', path: '/' },
    { name: 'ONPUSH SIGNAL', path: '/pushsignal' },
    { name: 'Additional', path: '/additional' },
  ];
}
