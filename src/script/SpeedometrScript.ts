/// <reference path="../../node_modules/@types/ragemp-c/index.d.ts" />

import IScript from "../core/interfaces/IScript";
import { Event, RageEvent } from "../core/enums/Event";
import { player } from "../core/LocalPlayer";
import Browser from "../core/Browser";
import { start } from "repl";
import Notifier from "../core/Notifier";
import { NotificationType } from "../core/enums/NotificationType";

export default class SpeedometrScript implements IScript {

    /**
     * start
     */

    public start(): void {
       mp.events.add("onPlayerEnterVehicle",(seat)=>{
        if(seat == 0)
        {
            player.notifier = new Notifier();
            let speed = mp.players.local.vehicle.getSpeed();
            player.notifier.notify(NotificationType.Info,speed.toString(),'[Debug]Speedo');
        }
       });
        
    }
}