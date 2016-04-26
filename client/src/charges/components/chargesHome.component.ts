import {Component, ChangeDetectionStrategy} from "angular2/core";
import {Charge} from "../models/Charge";
import {ChargesService} from "../services/charge.service";
import {Observable} from "rxjs/Observable";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {ChargesList} from "./chargesList.component";
import {EditCharge} from "./editCharge.component";

@Component({
    selector: 'charges-home',
    providers: [ChargesService],
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
        path: '/', name:'ChargeList', component: ChargesList, useAsDefault: true
    },
    {
        path: '/new', name:'NewCharge', component: EditCharge
    },
    {
        path: '/update/:id', name:'UpdateCharge', component: EditCharge
    }
])
export class ChargesHome{

}