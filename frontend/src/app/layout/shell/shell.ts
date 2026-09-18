import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-shell',
  styleUrl: './shell.scss',
  templateUrl: './shell.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Shell {
  
}
