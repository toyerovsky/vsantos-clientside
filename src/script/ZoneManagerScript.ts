/// <reference path="../../node_modules/@types/ragemp-c/index.d.ts" />

import IScript from "../core/interfaces/IScript";
import { Event } from "../core/enums/Event";
import { player } from "../core/LocalPlayer";


export default class ZoneManagerScript implements IScript {
    /**
     * playerZoneManagerRequestedHandler
     */
    public playerZoneManagerRequestedHandler = (...args: any[]) => {
        player.mainBrowser.changeUrl("zone-manager/index.html", true, true, false);
    }

    /**
     * start
     */
    public start(): void {
        mp.events.add(Event.playerZoneManagerRequested, this.playerZoneManagerRequestedHandler);
    }
}