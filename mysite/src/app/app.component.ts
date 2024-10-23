import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsService } from './settings/settings.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mysite';

  apiUrl: string = "";

  constructor(settingsService: SettingsService) {
    this.apiUrl = settingsService.settings.apiUrl;
  }
}
