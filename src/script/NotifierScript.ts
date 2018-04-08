/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

import IScript from "../core/interfaces/IScript";
import { Event, RageEvent } from "../core/enums/Event";
import { player } from "../core/LocalPlayer";
import Notifier from "../core/Notifier";
import { NotificationType } from "../core/enums/NotificationType";
import Browser from "../core/Browser";

export default class NotifierScript implements IScript {

    /**
     * start
     */
    public start(): void {
        player.notifier = new Notifier();

        mp.events.add(Event.playerNotifyRequested, (...args: any[]) => {
            var message: string = args[0];
            var notificationType: NotificationType = args[1];
            var title: string = args[2];
            player.notifier.notify(notificationType, message, title);
        });
    }
}