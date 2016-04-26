import {Component, ChangeDetectionStrategy} from "angular2/core";
import {Friend} from "../models/Friend";
import {FriendsService} from "../services/friends.service";
import {Observable} from "rxjs/Observable";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {FriendsList} from "./fiendsList.component";
import {EditFriend} from "./editFriend.component";

@Component({
    selector: 'friends-home',
    providers: [FriendsService],
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
        path: '/', name:'FriendList', component: FriendsList, useAsDefault: true
    },
    {
        path: '/new', name:'NewFriend', component: EditFriend
    },
    {
        path: '/update/:id', name:'UpdateFriend', component: EditFriend
    }
])
export class FriendsHome{

}