import { NotificationType } from "../enums/NotificationType";
import Browser from "../Browser";

export default class Notifier {

    browser: Browser = new Browser("package://toast/index.html", true, false, false);
    type: NotificationType = NotificationType.Info;
    data: Array<string> = [];

    public notify(type: NotificationType, message: string, title: string = "") {
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

        // zrobilem tak zeby nie trzeba bylo za kazdym razem ustawiac tytulu
        if (title == "")
            title = this.getTitle(type);

        this.type = type;
        this.data = [title, message, background, messageColor];
        
        this.browser.execute(`parseData('${JSON.stringify(this.data)}')`);
    }

    private getTitle(notificationType: NotificationType): string {
        if (notificationType == NotificationType.Info)
            return "Info";
        else if (notificationType == NotificationType.Warning)
            return "Ostrzeżenie";
        else
            return "Błąd";
    }
}