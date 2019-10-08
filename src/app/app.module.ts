import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from './material.module';
import { ListDataService } from './services/list-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    ListDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
