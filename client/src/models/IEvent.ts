import {IFriend} from "./IFriend";

export interface IEvent{
    id:number;
    name:string;
    description:string;
    participants:[IFriend];
}