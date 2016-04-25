import {bootstrap} from "angular2/platform/browser";
import {HTTP_PROVIDERS, Http} from "angular2/http";
import {MainApp} from "./components/app"
import {ROUTER_PROVIDERS} from "angular2/router";

bootstrap(MainApp, [
    HTTP_PROVIDERS, 
    ROUTER_PROVIDERS]);