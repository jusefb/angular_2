import {Component, ChangeDetectionStrategy} from "angular2/core";
import {IEvent} from "../models/IEvent";
import {EventsService} from "../services/events.service";
import {Observable} from "rxjs/Observable";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {EventDetails} from "./eventDetails.component";
import {EventList} from "./eventsList.component";
import {NewEvent} from "./newEvent.component";

@Component({
    selector: 'events-home',
    providers: [EventsService],
    directives: [ROUTER_DIRECTIVES],
    //In this case, instead of watching for changes on an array of Threads, Angular will subscribe for changes to the threads observable - and trigger an update when a new event is emitted.
    template: `
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {
        path: '/', name:'EventList', component: EventList, useAsDefault: true
    },
    {
        path: '/:id', name:'EventDetails', component: EventDetails
    },
    {
        path: '/new', name:'NewEvent', component: NewEvent
    }
])
export class EventsHome{

}