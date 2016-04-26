import {Component, ChangeDetectionStrategy, OnInit} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {EventsService} from "../services/events.service.ts";
import {Event} from "../models/Event";
import {RouteParams, ROUTER_DIRECTIVES, Router} from "angular2/router";
import {ChargesService} from "../../charges/services/charge.service";
import {Charge} from "../../charges/models/Charge";
import * as _ from "lodash";

@Component({
    selector: 'eventId-details',
    directives: [ROUTER_DIRECTIVES],
    template: require('./eventDetails.html')
})
export class EventDetails implements OnInit{

    event:Observable<Event>;
    eventCharges: Observable<[Charge]>;
    chargesPerParticipant;
    activeTab;
    private payments;

    constructor(private eventsService: EventsService, private chargesService: ChargesService, private _routeParams: RouteParams, private _router: Router){
    }

    ngOnInit(){
        this.activeTab = 'tab1';
        this.eventsService.getEvent(this._routeParams.params['id']).subscribe(event => {
            this.event = event;
            this.eventCharges = this.chargesService.getForEvent(event.id);
            this.eventCharges.subscribe((charges) => {
                this.payments = [];
                for(var participant of event.participants){
                    var amountOwed = [];
                    var memberCharges = this.getChargesForMember(charges, participant.id);
                    var chargesPerPersonPaid = this.getMoneyOwedPerPersonWhoPaid(memberCharges);

                    this.payments.push({
                        name: participant.name,
                        chargesPerPersonPaid: chargesPerPersonPaid
                    })
                }
            });
        });

    }

    getChargesForMember(charges, participantId){
        var chargesForPrt = [];
        //get all charges that each member of the event owes
        chargesForPrt = _.filter(charges, (charge) =>{
            return _.findIndex(charge['participants'], {id: participantId}) > -1;
        });

        return chargesForPrt;
    }

    getMoneyOwedPerPersonWhoPaid(filteredCharges){
        var moneyOwed = [];
        //group the charges by who paid them
        var chargeGroups = _.groupBy(filteredCharges, 'paidBy.name');
        for(var key in chargeGroups){
            moneyOwed.push({
                owedTo: key,
                total: this.getTotal(chargeGroups[key]).toFixed(2)
            });
        }
        return moneyOwed;
    }

    getTotal(charges){
        var total = 0;
        for(var charge of charges){
            total += ((charge['amount'] / charge['participants'].length) * 100)/100
        }
        return total;
    }

    deleteEvent(){
        this.eventsService.delete(this._routeParams.params['id']).subscribe(() => {
            this._router.navigate(['EventList']);
        })
    }

    setActiveTab(tabId){
        this.activeTab = tabId;
        return false;
    }
}