import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { ionSearch, ionLogoFacebook } from '@ng-icons/ionicons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SingupComponent } from './pages/auth/singup/singup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormInputComponent } from './components/form/form-input/form-input.component';
import { SubmitButtonComponent } from './components/form/submit-button/submit-button.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SingupComponent,
    NavbarComponent,
    BannerComponent,
    FormInputComponent,
    SubmitButtonComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ ionSearch, ionLogoFacebook }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
