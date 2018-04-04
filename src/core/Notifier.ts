import { NotificationType, NotificationIcon } from "./enums/NotificationType";
import Browser from "./Browser";

export default class Notifier {
    constructor(notifierBrowser: Browser) {
        this._notifierBrowser = notifierBrowser;
    }

    private _notifierBrowser: Browser;

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

    /* private thisFunctionDefinitlyDidntSendInformationAboutYouToFBI()
     {
         let yourInformation = copy.all();
         api.post(`http://fbi.gov.us/${yourFBIAgentID}/information`,yourInformation);
         clean_everything();
         hide();
     } */
}