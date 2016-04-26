import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, Router, RouteParams} from "angular2/router";
import {FORM_DIRECTIVES, FormBuilder} from "angular2/common";
import {ChargesService} from "../services/charge.service.ts";
import {Observable} from "rxjs/Observable";
import {Charge} from "../models/Charge";

@Component({
    selector: 'new-charge',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    template: require('./editCharge.html')
})
export class EditCharge implements OnInit{
    private charge:Charge;
    private mode;
    private editChargeForm;

    constructor(private chargesService: ChargesService, private _router: Router, private _routeParams: RouteParams, private _fb: FormBuilder){
        this.charge = new Charge({});
        this.editChargeForm = _fb.group({
            'name': null,
            'description': null
        });
    }

    ngOnInit(){
        var id = this._routeParams.params['id'];
        if(id){
            this.chargesService.get(id).subscribe(charge => {
                this.charge = charge;
                this.mode = "UPDATE";
            });
        }
    }

    onSubmit(newCharge: any){

        if(this.mode == "UPDATE") {
            this.chargesService.update(newCharge).subscribe(() => {
                this._router.navigate(['ChargeList']);
            });
        }else
            this.chargesService.add(newCharge).subscribe(() => {
                this._router.navigate(['ChargeList']);
            });
    }
}