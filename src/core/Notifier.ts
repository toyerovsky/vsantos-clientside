import { NotificationType } from "./enums/NotificationType";
import Browser from "./Browser";

export default class Notifier {
    constructor(notifierBrowser: Browser) {
        this._notifierBrowser = notifierBrowser;
    }

    private _notifierBrowser: Browser;

    public notify(type: NotificationType, message: string, title: string = "") {
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

        this._notifierBrowser.execute(`parseData('${JSON.stringify([title, message, background, messageColor])}')`);
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