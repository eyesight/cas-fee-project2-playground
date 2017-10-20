import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, BaseRequestOptions } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { AppComponent } from './app.component';
import { ChatMessageComponent } from './30_chat/chat-message/chat-message.component';
import { ChatAddmessageComponent } from './30_chat/chat-addmessage/chat-addmessage.component';
import { ChatThreadComponent } from './30_chat/chat-thread/chat-thread.component';
import { ClasslistItemComponent } from './20_classlist/classlist-item/classlist-item.component';
import { ClasslistListComponent } from './20_classlist/classlist-list/classlist-list.component';
import { ProfileAvatarComponent } from './10_profile/profile-avatar/profile-avatar.component';
import { ProfileFormComponent } from './10_profile/profile-form/profile-form.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './00_login/login.component';

import { AuthGuard } from './_guards/auth.guards';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { AlertComponent } from './_helpers/alert/alert.component';
import { RegistrationComponent } from './01_registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatMessageComponent,
    ChatAddmessageComponent,
    ChatThreadComponent,
    ClasslistItemComponent,
    ClasslistListComponent,
    ProfileAvatarComponent,
    ProfileFormComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AlertComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      // otherwise redirect to home
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AlertService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
