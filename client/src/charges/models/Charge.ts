export class Charge{
    public id;
    public name;
    public eventId;
    public paidBy;
    public amount;
    public participants;
    
    constructor(options){
        this.id = options.id ? options.id : null;
        this.name = options.name ? options.name : null;
        this.eventId = options.eventId ? options.eventId : null;
        this.paidBy = options.paidBy ? options.paidBy : null;
        this.amount = options.amount ? options.amount : null;
        this.participants = options.participants ? options.participants : null;
    }
}