import {Component, ChangeDetectionStrategy} from "angular2/core";
import {Event} from "../models/Event";
import {EventsService} from "../services/events.service";
import {Observable} from "rxjs/Observable";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {EventDetails} from "./eventDetails.component";
import {EventList} from "./eventsList.component";
import {EditEvent} from "./editEvent.component";
import {ChargesService} from "../../charges/services/charge.service";
import {FriendsService} from "../../friends/services/friends.service";

@Component({
    selector: 'events-home',
    providers: [EventsService, FriendsService, ChargesService],
    directives: [ROUTER_DIRECTIVES],
    host: {
        'class': 'g--12'
    },
    //In this case, instead of watching for changes on an array of Threads, Angular will subscribe for changes to the threads observable - and trigger an update when a new eventId is emitted.
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
        path: '/new', name:'NewEvent', component: EditEvent
    },
    {
        path: '/update/:id', name:'UpdateEvent', component: EditEvent
    }
])
export class EventsHome{

}