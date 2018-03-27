import { NotificationType } from "../enums/NotificationType";
import Browser from "../Browser";
export default class Notifier {

<<<<<<< Updated upstream
    browser: Browser = new Browser("package://toast/index.html", true, false, false);
    type: NTypes = NTypes.INFO;
    data: Array<string> = [];

    public start(){
        var b = this.browser;
        b.execute(`parseData('${JSON.stringify(this.data)}')`);
    }

    public init(type: NTypes,title: string,message: string){
        this.data = [];
        let background = "purple";
        let messageColor = "white";
        switch(type){
            case NTypes.INFO:
                background = "grey"
                break;
            case NTypes.WARNING:
                background = "pink"
                break;
            case NTypes.ERROR:
                background = "red";
                break;
        }
        this.type = type;
        this.data = [title,message,background,messageColor];
=======
    public init(ntype: NotificationType, value: string){
        var browser: Browser = new Browser("package://toast/index.html", true, false, false);
        browser.execute('showToast(${JSON.stringify([0,"Testowa wiadomosc"])})');
>>>>>>> Stashed changes
    }





}