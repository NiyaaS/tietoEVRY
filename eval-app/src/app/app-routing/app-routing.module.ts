import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainComponent} from '../main/main.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import {AddEventComponent} from '../add-event/add-event.component';

const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'add-event', component: AddEventComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
