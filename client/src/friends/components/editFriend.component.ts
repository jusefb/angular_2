import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, Router, RouteParams} from "angular2/router";
import {FORM_DIRECTIVES, FormBuilder} from "angular2/common";
import {FriendsService} from "../services/friends.service.ts";
import {Observable} from "rxjs/Observable";
import {Friend} from "../models/Friend";

@Component({
    selector: 'new-friend',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    template: require('./editFriend.html')
})
export class EditFriend implements OnInit{
    private friend:Friend;
    private mode;
    private editFriendForm;

    constructor(private friendsService: FriendsService, private _router: Router, private _routeParams: RouteParams, private _fb: FormBuilder){
        this.friend = new Friend({});
        this.editFriendForm = _fb.group({
            'name': null,
            'description': null
        });
    }

    ngOnInit(){
        var id = this._routeParams.params['id'];
        if(id){
            this.friendsService.get(id).subscribe(friend => {
                this.friend = friend;
                this.mode = "UPDATE";
            });
        }
    }

    onSubmit(newFriend: any){

        if(this.mode == "UPDATE") {
            this.friendsService.update(newFriend).subscribe(() => {
                this._router.navigate(['FriendList']);
            });
        }else
            this.friendsService.add(newFriend).subscribe(() => {
                this._router.navigate(['FriendList']);
            });
    }
}