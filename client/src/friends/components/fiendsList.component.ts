import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Observable} from "rxjs/Observable";
import {FriendsService} from "../services/friends.service.ts";
import {Friend} from "../models/Friend";
@Component({
    selector: 'friends-list',
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        .new-friend{
            right: 15%;
            float: right;
        }
    `],
    template: require('./friendsList.html')
})
export class FriendsList{
    private friends:Observable<[Friend]>;

    constructor(private friendsService: FriendsService){
        this.friends = friendsService.getAll();
    }
}