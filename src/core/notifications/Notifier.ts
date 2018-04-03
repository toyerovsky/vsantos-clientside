import { NotificationType } from "../enums/NotificationType";
import Browser from "../Browser";

export default class Notifier {

    browser: Browser = new Browser("package://toast/index.html", true, false, false);
    type: NotificationType = NotificationType.Info;
    data: Array<string> = [];

    public start() {
        var b = this.browser;
        b.execute(`parseData('${JSON.stringify(this.data)}')`);
    }

    public init(type: NotificationType, title: string, message: string) {
        this.data = [];
        let background = "purple";
        let messageColor = "white";
        switch (type) {
            case NotificationType.Info:
                background = "grey"
                break;
            case NotificationType.Warning:
                background = "pink"
                break;
            case NotificationType.Error:
                background = "red";
                break;
        }
        this.type = type;
        this.data = [title, message, background, messageColor];
    }

    public getTypeById(id: number){
        switch(id){
            case 0:
<<<<<<< HEAD
                return NotificationType.Info;
                break;
            case 1:
                return NotificationType.Warning;
                break;
            case 2:
                return NotificationType.Error;
=======
                return NTypes.INFO;
                break;
            case 1:
                return NTypes.WARNING;
                break;
            case 2:
                return NTypes.ERROR;
>>>>>>> master
                break;
        }
    }





}