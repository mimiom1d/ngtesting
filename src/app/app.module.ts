import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { XyzUserListComponent } from './user-list/user-list.component';
import { XyzWebStorageService } from './shared/web-storage.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  providers: [XyzWebStorageService],
  declarations: [ AppComponent, XyzUserListComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
