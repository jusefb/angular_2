import {bootstrap} from "angular2/platform/browser";
import {HTTP_PROVIDERS, Http} from "angular2/http";
import {MainApp} from "./main/components/app"
import {ROUTER_PROVIDERS} from "angular2/router";
import {provide} from "angular2/core";


bootstrap(MainApp, [
    HTTP_PROVIDERS, 
    ROUTER_PROVIDERS
]);