import {Component} from "angular2/core";
import {RouterLink} from "angular2/router";
@Component({
    selector: 'side-menu',
    directives: [RouterLink],
    template:`
        <p>This is the Side menu</p>
        <nav>
            <a [routerLink]="['EventsHome']">Events</a>
            <a [routerLink]="['FriendsHome']">Friends</a>
            <a [routerLink]="['ChargesHome']">Charges</a>
        </nav>
    `
})
export class SideMenu{
    constructor(){

    }
}