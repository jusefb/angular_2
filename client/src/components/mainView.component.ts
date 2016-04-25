import {Component} from "angular2/core";
import {RouterOutlet} from "angular2/router";
@Component({
    selector: 'main-view',
    directives: [RouterOutlet],
    template: `
        <router-outlet></router-outlet>
    `
})
export class MainView{
    constructor(){
        
    }
}