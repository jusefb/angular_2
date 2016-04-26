import {Observable} from "rxjs/Observable";
import {Charge} from "../models/Charge";
import * as _ from "lodash";

// public id;
// public name;
// public eventId;
// public paidById;
// public amount;
// public participants;

let friendsData = [

    {
        id: 1,
        name: 'Restaurant by the beach',
        eventId: 1,
        paidBy: {
            id: 1,
            name: 'Sarah'
        },
        participants: [{
            id: 1,
            name: 'Sarah'
        },{
            id: 2,
            name: 'Peter'
        },{
            id: 1,
            name: 'Hank'
        }],
        amount: 200

    },
    {
        id: 2,
        name: 'Hotel',
        eventId: 1,
        paidBy: {
            id: 3,
            name: 'Hank'
        },
        participants: [{
            id: 1,
            name: 'Sarah'
        },{
            id: 2,
            name: 'Peter'
        },{
            id: 1,
            name: 'Hank'
        }],
        amount: 100

    },
    {
        id: 3,
        name: 'Drinks',
        eventId: 1,
        paidBy: {
            id: 2,
            name: 'Peter'
        },
        participants: [{
            id: 1,
            name: 'Sarah'
        },{
            id: 2,
            name: 'Peter'
        },{
            id: 1,
            name: 'Hank'
        }],
        amount: 499

    },
    {
        id: 4,
        name: 'Transport',
        eventId: 1,
        paidBy: {
            id: 1,
            name: 'Sarah'
        },
        participants: [{
            id: 1,
            name: 'Sarah'
        },{
            id: 2,
            name: 'Peter'
        },{
            id: 1,
            name: 'Hank'
        }],
        amount: 150

    },
];

export class ChargesService {

    getAll() {
        let firends:Observable<[Charge]> = Observable.create((observer) => {
                observer.next(friendsData);
                observer.complete();
            }
        );

        return firends;
    }

    get(id){
        return Observable.create(observer => {
            var event = _.find(friendsData, {id: parseInt(id)});
            observer.next(event);
            observer.complete();
        });
    }

    getForEvent(eventId){
        return Observable.create(observer => {
            var chargesForEvent = _.filter(friendsData, {eventId: parseInt(eventId)});
            observer.next(chargesForEvent);
            observer.complete();
        });
    }

    add(event:any) {
        return Observable.create((observer) =>{
            var newCharge:Charge = event;
            newCharge.id = this.getNewId();
            friendsData.push(newCharge);
            observer.next(newCharge);
            observer.complete();
        });
    }

    private getNewId(){
        return _.maxBy(friendsData, 'id').id + 1;
    }

    update(updatedCharge:any) {
        return Observable.create((observer) =>{
            var objIndex = _.findIndex(friendsData, {id: updatedCharge.id})
            _.assign(friendsData[objIndex], [updatedCharge]);
            observer.next(updatedCharge);
            observer.complete();
        });
    }

    delete(updatedCharge:any) {
        return Observable.create((observer) =>{
            var objIndex = _.findIndex(friendsData, {id: updatedCharge.id})
            friendsData.splice(objIndex);
            observer.next(true);
            observer.complete();
        });
    }
}