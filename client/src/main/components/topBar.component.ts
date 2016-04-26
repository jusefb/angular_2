import {Component} from "angular2/core";
import {Title} from "angular2/src/platform/browser/title";
@Component({
    selector: 'top-bar',
    providers: [Title],
    template: `
        <h1 class="m--1 g--6 color--white">Lets Pay Our Friends</h1>
    `
})
export class TopBar{
    pageTitle;

    constructor(private titleService: Title){
        this.pageTitle = titleService.getTitle();
    }
}