import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, Router, RouteParams} from "angular2/router";
import {FORM_DIRECTIVES, FormBuilder} from "angular2/common";
import {EventsService} from "../services/events.service.ts";
import {Observable} from "rxjs/Observable";
import {Event} from "../models/Event";

@Component({
    selector: 'new-eventId',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    template: require('./editEvent.html')
})
export class EditEvent implements OnInit{
    private event:Event;
    private mode;
    private editEventForm;

    constructor(private eventsService: EventsService, private _router: Router, private _routeParams: RouteParams, private _fb: FormBuilder){
        this.event = new Event({});
        this.editEventForm = _fb.group({
            'name': null,
            'description': null
        });
    }

    ngOnInit(){
        var id = this._routeParams.params['id'];
        if(id){
            this.eventsService.getEvent(id).subscribe(event => {
                this.event = event;
                this.mode = "UPDATE";
            });
        }
    }

    onSubmit(newEvent: any){

        if(this.mode == "UPDATE") {
            this.eventsService.update(newEvent).subscribe(() => {
                this._router.navigate(['EventList']);
            });
        }else
            this.eventsService.add(newEvent).subscribe(() => {
                this._router.navigate(['EventList']);
            });
    }
}