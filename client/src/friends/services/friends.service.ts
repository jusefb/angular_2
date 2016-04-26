import {Observable} from "rxjs/Observable";
import {Friend} from "../models/Friend";
import * as _ from "lodash";

let friendsData = [
    {
        id: 1,
        name: 'Mark',
        avatar: ""
    },
    {
        id: 2,
        name: 'Sarah',
        avatar: ""
    },
    {
        id: 3,
        name: 'Harry',
        avatar: ""
    },
];

export class FriendsService {

    getAll() {
        let friends:Observable<[Friend]> = Observable.create((observer) => {
                observer.next(friendsData);
                observer.complete();
            }
        );

        return friends;
    }

    get(id){
        return Observable.create(observer => {
            var event = _.find(friendsData, {id: parseInt(id)});
            observer.next(event);
            observer.complete();
        });
    }

    add(event:any) {
        return Observable.create((observer) =>{
            var newFriend:Friend = event;
            newFriend.id = this.getNewId();
            friendsData.push(newFriend);
            observer.next(newFriend);
            observer.complete();
        });
    }

    private getNewId(){
        return _.maxBy(friendsData, 'id').id + 1;
    }

    update(updatedFriend:any) {
        return Observable.create((observer) =>{
            var objIndex = _.findIndex(friendsData, {id: updatedFriend.id})
            _.assign(friendsData[objIndex], [updatedFriend]);
            observer.next(updatedFriend);
            observer.complete();
        });
    }

    delete(updatedFriend:any) {
        return Observable.create((observer) =>{
            var objIndex = _.findIndex(friendsData, {id: updatedFriend.id})
            friendsData.splice(objIndex);
            observer.next(true);
            observer.complete();
        });
    }
}