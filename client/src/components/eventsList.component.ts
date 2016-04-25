import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Observable} from "rxjs/Observable";
import {EventsService} from "../services/events.service";
import {IEvent} from "../models/IEvent";
@Component({
    selector: 'events-list',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <ul>
            <li *ngFor="#event of events | async"><a [routerLink]="['EventDetails', {id: event.id}]">{{event.name}}</a></li>
        </ul>
        <button [routerLink]="['NewEvent']">New Event</button>

    `
})
export class EventList{
    private events:Observable<[IEvent]>;

    constructor(private eventsService: EventsService){
        this.events = eventsService.getAll();
    }
}