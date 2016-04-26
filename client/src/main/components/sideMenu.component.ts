import {Component} from "angular2/core";
import {RouterLink} from "angular2/router";
@Component({
    selector: 'side-menu',
    directives: [RouterLink],
    template:`
        <nav class="mdl-navigation">
            <a class="mdl-navigation__link" [routerLink]="['EventsHome']">Events</a>
            <a class="mdl-navigation__link" [routerLink]="['FriendsHome']">Friends</a>
            <a class="mdl-navigation__link" [routerLink]="['ChargesHome']">Charges</a>
        </nav>
    `
})
export class SideMenu{
    constructor(){

    }
}