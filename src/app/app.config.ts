import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(),
    provideAuth0({
      domain: 'dev-4o7zfckpu32ig6ok.us.auth0.com',
      clientId: 'Kru1bwD075EU0XNH2bpxeDvV3bwBwnkD',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
};
