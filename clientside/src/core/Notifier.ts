import { NotificationIcon } from "./enums/Notifications/NotificationIcon";
import { NotificationType } from "./enums/Notifications/NotificationType";

import Browser from "./Browser";

export default class Notifier {
    private _notifierBrowser: Browser = new Browser("package://toast/index.html");

    public notify(type: NotificationType, message: string, title: string = "") {
        let background = "purple";
        let messageColor = "white";
        let icon = "";

        switch (type) {
            case NotificationType.Info:
                background = "rgba(192,192,192,0.9)";
                icon = NotificationIcon.Info;
                break;
            case NotificationType.Warning:
                background = "rgba(255,255,51,0.9)"
                icon = NotificationIcon.Warning;
                break;
            case NotificationType.Error:
                background = "rgba(255,105,180,0.9)";
                icon = NotificationIcon.Error;
                break;
        }
        // zrobilem tak zeby nie trzeba bylo za kazdym razem ustawiac tytulu
        if (title == "")
            title = this.getTitle(type);

        this._notifierBrowser.execute(`parseData('${JSON.stringify([title, message, background, messageColor, icon])}')`);
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