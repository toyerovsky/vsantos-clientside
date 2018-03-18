import { NType } from "../enums/NType";

export default  class ServerNotification{
    public content: string;
    public type: NType;
    public delay: number;
    public current_date: Date;



    constructor(content: string,type: NType,delay: number){
        this.content = content;
        this.type = type;
        this.delay = delay;
        this.current_date = new Date();
        this.show();
    }

    public show(){
        // TODO
    }


}