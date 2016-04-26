export class Friend{
    public id:number;
    public name:string;
    public avatar:string;

    constructor(options){
        this.id = options.id ? options.id : null;
        this.name = options.name ? options.name : null;
        this.avatar = options.avatar ? options.avatar : null;
    }
}