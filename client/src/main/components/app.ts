import {Component} from "angular2/core";
import {SideMenu} from "./sideMenu.component.ts";
import {TopBar} from "./topBar.component.ts";
import {RouteConfig, RouterLink} from "angular2/router";
import {MainView} from "./mainView.component";
import {EventsHome} from "./../../events/components/eventsHome.component";
import {FriendsHome} from "./../../friends/components/friendsHome.component";
import {ChargesHome} from "./../../charges/components/chargesHome.component";

require("../../../assets/surface-1.01/prod/css/surface_styles.css");
require("../../../assets/sass/style.scss");

@Component({
    selector: 'main-app',
    template: require('./app.html'),
    directives: [SideMenu, TopBar, MainView, RouterLink]
})
@RouteConfig([
    {
    path: '/events/...', name: 'EventsHome', component: EventsHome, useAsDefault: true
    },
    {
        path: '/friends/...', name: 'FriendsHome', component: FriendsHome
    },
    {
        path: '/charges/...', name: 'ChargesHome', component: ChargesHome
    }])
export class MainApp {
    constructor(){
        
    }
}
