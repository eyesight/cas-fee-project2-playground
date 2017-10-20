import { enableProdMode, Provider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';

import { HttpModule }    from '@angular/http';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AuthService } from './app/_services/old/auth.service';
import { AuthManager } from './app/_services/old/authmanager.service';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [RouterModule, HttpModule, AuthManager, AuthService]);
