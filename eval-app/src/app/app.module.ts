import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular';
// import {timeGrid} from '@fullcalendar/timegrid';
// import {interaction} from '@fullcalendar/interaction'; // for dateClick

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AddEventComponent } from './add-event/add-event.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ScheduleComponent,
    NavMenuComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FullCalendarModule,
    // timeGrid,
    // interaction,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
