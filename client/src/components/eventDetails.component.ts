import {Component, ChangeDetectionStrategy, OnInit} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {EventsService} from "../services/events.service";
import {IEvent} from "../models/IEvent";
import {RouteParams} from "angular2/router";
@Component({
    selector: 'event-details',
    template: `
        <div>
            <h1>Event {{event?.name}}</h1>
            <p>{{event?.description}}</p>
        </div>
    `
})
export class EventDetails implements OnInit{

    private event:Observable<IEvent>;

    constructor(private eventsService: EventsService, private _routeParams: RouteParams){
    }

    ngOnInit(){
        this.eventsService.getEvent(this._routeParams.params['id']).subscribe(event => {
            this.event = event;
        });
    }
}