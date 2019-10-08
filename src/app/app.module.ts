import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListDataService } from './services/list-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ListDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
