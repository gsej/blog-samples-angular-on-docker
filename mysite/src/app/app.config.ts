import { ApplicationConfig, provideZoneChangeDetection, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { SettingsHttpService } from './settings/settings.http.service';
import { provideHttpClient } from '@angular/common/http';

export function initializeApp(settingsHttpService: SettingsHttpService) {
  return () => settingsHttpService.initializeApp();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [SettingsHttpService],
      multi: true
    }
  ]
};
