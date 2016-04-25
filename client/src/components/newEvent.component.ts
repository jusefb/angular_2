import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
import {FORM_DIRECTIVES} from "angular2/common";
import {EventsService} from "../services/events.service";
@Component({
    selector: 'new-event',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    template:`
        <div>
            <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
                <div>
                <label for="eventName">Name:</label>
                <input id="eventName" type="text" name="name" ngControl="name"/>
                </div>
                <div>
                <label for="eventDescription">Description:</label>
                <textarea name="description" id="eventDescription" cols="30" rows="10" ngControl="description"></textarea>
                </div>
                <button type="submit">Save</button>
                <button type="button" [routerLink]="['EventList']">Cancel</button>
            </form>        
        </div>
    `
})
export class NewEvent{
    constructor(private eventsService: EventsService, private _router: Router){

    }

    onSubmit(newEvent: any){
        this.eventsService.add(newEvent).subscribe(() => {
            this._router.navigate(['EventList']);
        });
    }
}