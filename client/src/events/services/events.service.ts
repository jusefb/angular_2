import {Observable} from "rxjs/Observable";
import {Event} from "../models/Event";
import * as _ from "lodash";
import {Http, Response} from "angular2/http";
import {Injectable} from "angular2/core";
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';

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

// let eventsData = [];

@Injectable()
export class EventsService {
    constructor(private http: Http){

    }
    
    getAll() {
        let events:Observable<[Event]> = Observable.create((observer) => {
                observer.next(eventsData);
                observer.complete();
            }
        );
        return events;
        //noinspection TypeScriptUnresolvedFunction
        //return this.http.request('/data/eventsData.json');
    }

    getEvent(id){
        return Observable.create(observer => {
            var event = _.find(eventsData, {id: parseInt(id)});
            observer.next(event);
            observer.complete();
        });
    }

    add(event:any) {
        return Observable.create((observer) =>{
            var newEvent:Event = event;
            newEvent.id = this.getNewId();
            eventsData.push(newEvent);
            observer.next(newEvent);
            observer.complete();
        });
    }

    private getNewId(){
        return _.maxBy(eventsData, 'id').id + 1;
    }

    update(updatedEvent:any) {
        return Observable.create((observer) =>{
            var objIndex = _.findIndex(eventsData, {id: updatedEvent.id})
            _.assign(eventsData[objIndex], [updatedEvent]);
            observer.next(updatedEvent);
            observer.complete();
        });
    }

    delete(updatedEvent:any) {
        return Observable.create((observer) =>{
            var objIndex = _.findIndex(eventsData, {id: updatedEvent.id})
            eventsData.splice(objIndex);
            observer.next(true);
            observer.complete();
        });
    }
}