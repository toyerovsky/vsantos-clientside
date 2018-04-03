/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />
import IScript from "../core/interfaces/IScript";
import { Event, RageEvent } from "../core/enums/Event";
import Browser from "../core/Browser";
import LocalPlayer, { localPlayer } from "../core/LocalPlayer";
import Notifier from "../core/notifications/Notifier";
import { NotificationType } from "../core/enums/NotificationType";

export default class NotifierScript implements IScript {

    /**
     * start
     */
    public start(): void {
        mp.events.add(Event.playerNotifyRequested, (...args: any[]) => {
            var message: string = args[0];
            var notificationType: NotificationType = args[1];
            var title: string = args[2];
            var notifier: Notifier = localPlayer.mainNotifier;
            notifier.notify(notificationType, message, title);
        });
    }
}