import {Friend} from "./../../friends/models/Friend";

export class Event{
    public id:number;
    public name:string;
    public description:string;
    public participants:[Friend];

    constructor(values){
        
    }
}