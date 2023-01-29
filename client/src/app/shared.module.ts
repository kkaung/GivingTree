import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NgIconsModule } from '@ng-icons/core';
import {
  ionSearch,
  ionLogoFacebook,
  ionEye,
  ionEyeOff,
} from '@ng-icons/ionicons';

@NgModule({
  declarations: [],
  imports: [
    NgIconsModule.withIcons({ ionSearch, ionLogoFacebook, ionEye, ionEyeOff }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class SharedModule {}
