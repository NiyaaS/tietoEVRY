import { Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventsService } from '../events.service';
import { UsersService } from '../users.service';

import { ɵInternalFormsSharedModule } from '@angular/forms';
// import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Tooltip } from 'bootstrap';
import svLocale from '@fullcalendar/core/locales/sv';
// import { Calendar } from '@fullcalendar/core';
// import { FullCalendarComponent } from '@fullcalendar/angular';



interface used{
  //events, users, groups properties
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})


export class ScheduleComponent implements OnInit {

  private options: any;
  private events: EventsService[];
  private users: UsersService[];

  
  constructor(private eventService: EventsService, private userService: UsersService) {}

  onHoverGroupFilter(e:UsersService) {
    // console.log(e);
    // this.userService.getUsers().subscribe(events =>{
    //   this.users = this.users.map((users) =>{
    //   })
    // })
  };
  filterGroupsOrUsers(){
    alert('custom function called');
    // filter groups or users
    // this.userService.getUsers();
    // this.eventService.getEvents();
  
  }
  
  ngOnInit() {
    this.options = {
      editable: true,
      customButtons: {
        FilterButton: {
          text: 'Filter',
          click: () => this.filterGroupsOrUsers()          
        }
      },
      header: {
        right: 'prev,next today',
        center: ' title',
        left: 'dayGridMonth,dayGridWeek,dayGridDay, FilterButton'
      },
      plugins: [dayGridPlugin],
      locales: [svLocale],
      eventLimit: true,
      weekNumbers: true
    };
    //Maps event and gives every user diffrent event color
    this.eventService.getEvents().subscribe(events => {
      this.events = events.map((event) => {
        event['backgroundColor'] = event.user === "100" ? '#FF73FA' : (
          (event.user === "102" ? '#43B581' : (event.user === "103" ? '#F57731' : 'default')
          ))
        return event
      })
    });

    // this.events = this.eventService.getEvents();
    this.users = this.userService.getUsers();
    console.log(this.users);
    console.log(this.events);

  };

  eventRendered(info) {
    // Tooltip
    var tooltip = new Tooltip(info.el, {
      title: info.event.title,
      placement: 'top',
      trigger: 'hover',
      container: 'body'
    });

    // console.log(info);
    
    info.el.addEventListener('mouseover', (evt) => {
      // this.onHoverGroupFilter(evt);
      evt.target.style.fontWeight = 'bold';
      evt.target.style.cursor = 'pointer';
    });

    info.el.addEventListener('mouseout', (evt) => {
      evt.target.style.fontWeight = '';
    });
    
  }
}
