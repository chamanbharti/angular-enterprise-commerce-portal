import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Shell } from './layout/shell/shell';

@Component({
  imports: [RouterOutlet, Shell],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Enterprise Commerce & Operations Portal');
}
