import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Observable} from "rxjs/Observable";
import {ChargesService} from "../services/charge.service.ts";
import {Charge} from "../models/Charge";
@Component({
    selector: 'charges-list',
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        .new-charge{
            right: 15%;
            float: right;
        }
    `],
    template: require('./chargesList.html')
})
export class ChargesList{
    private charges:Observable<[Charge]>;

    constructor(private chargesService: ChargesService){
        this.charges = chargesService.getAll();
    }
}