import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-shell',
  styleUrl: './shell.scss',
  templateUrl: './shell.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Shell {
  
}
