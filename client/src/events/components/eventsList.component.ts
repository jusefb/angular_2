import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Observable} from "rxjs/Observable";
import {EventsService} from "../services/events.service.ts";
import {Event} from "../models/Event";
@Component({
    selector: 'events-list',
    directives: [ROUTER_DIRECTIVES],
    host: {
        'class': 'g--12'
    },
    styles: [`
        .new-event{
            right: 15%;
            float: right;
        }
    `],
    template: require('./eventsList.html')
})
export class EventList{
    private events:Observable<any>;

    constructor(private eventsService: EventsService){
        this.events = eventsService.getAll();
    }
}