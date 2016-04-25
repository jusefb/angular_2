import {Observable} from "rxjs/Observable";
import {IEvent} from "../models/IEvent";
import * as _ from "lodash";

let eventsData = [
    {
        id: 1,
        name: 'Trip to Prague',
        description: 'Our Friends stag due in Prague',
        participants: [
            {
                id: 1,
                name: 'Mark'
            },
            {
                id: 2,
                name: 'Paul'
            },
            {
                id: 3,
                name: 'Sarah'
            }
        ]
    },
    {
        id: 2,
        name: 'Trip to Paris',
        description: 'Sarahs birthday in Paris',
        participants: [
            {
                id: 1,
                name: 'Mark'
            },
            {
                id: 2,
                name: 'Paul'
            },
            {
                id: 3,
                name: 'Sarah'
            }
        ]
    }
];

export class EventsService {


    getAll() {
        let events:Observable<[IEvent]> = Observable.create((observer) => {
                observer.next(eventsData);
                observer.complete();
            }
        );

        return events;
    }

    getEvent(id){
        return Observable.create(observer => {
            var event = _.find(eventsData, {id: id});
            observer.next(event);
            observer.complete();
        });
    }

    add(event:any) {
        return Observable.create((observer) =>{
            var newEvent:IEvent = event;
            newEvent.id = this.getNewId();
            eventsData.push(newEvent);
            observer.next(newEvent);
            observer.complete();
        });
    }

    private getNewId(){
        return _.maxBy(eventsData, 'id').id + 1;
    }
}