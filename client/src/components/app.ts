import {Component} from "angular2/core";
import {SideMenu} from "./sideMenu.component";
import {TopBar} from "./topBar.component";
import {RouteConfig, RouterLink} from "angular2/router";
import {MainView} from "./mainView.component";
import {EventsHome} from "./eventsHome.component";
import {FriendsHome} from "./friendsHome.component";
import {ChargesHome} from "./chargesHome.component";

@Component({
    selector: 'main-app',
    template: `
        <top-bar>Place for the Top bar</top-bar>
        <side-menu>Side menu</side-menu>
        <main-view>Place for the main view</main-view>
    `,
    directives: [SideMenu, TopBar, MainView, RouterLink]
})
@RouteConfig([
    {
    path: '/events/...', name: 'EventsHome', component: EventsHome, useAsDefault: true
    },
    {
        path: '/friends', name: 'FriendsHome', component: FriendsHome
    },
    {
        path: '/charges', name: 'ChargesHome', component: ChargesHome
    }])
export class MainApp {

}
