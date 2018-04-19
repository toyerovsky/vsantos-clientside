/// <reference path="../../node_modules/@types/ragemp-c/index.d.ts" />

import IScript from "../core/interfaces/IScript";
import { Event, RageEvent } from "../core/enums/Event";
import { player } from "../core/LocalPlayer";
import Browser from "../core/Browser";
import { start } from "repl";
import Notifier from "../core/Notifier";
import { NotificationType } from "../core/enums/Notifications/NotificationType";

export default class SpeedometrScript implements IScript {

    /**
     * start
     */
    public start(): void {
        mp.events.add("playerEnterVehicle", (vehicle, seat) => {
            mp.gui.chat.push("test 1")
            mp.gui.chat.push("SeatID from seat:" + seat);
            //mp.gui.chat.push("SeatID from vehicle.seat:"+mp.players.local.seat);

            // if (seat == 0) {
            mp.gui.chat.push("test 2")
            player.notifier = new Notifier();
            setTimeout(() => {
                let speed = mp.players.local.vehicle.getSpeed();
                mp.gui.chat.push(speed.toString());
                mp.events.add('render', () => {
                    let veh = mp.players.local.vehicle;
                    if (veh !== undefined || veh !== null) {
                        let speed = veh.getSpeed();
                        mp.gui.chat.push(speed.toString());
                    }
                    else
                        return ;

                });
            }, 2500)


            //player.notifier.notify(NotificationType.Info, speed.toString(), '[Debug]Speedo');

            mp.events.add(RageEvent.playerLeaveVehicle, () => {
               // let speed = mp.players.local.vehicle.getSpeed();
                //player.notifier.notify(NotificationType.Info, speed.toString(), '[Debug]Speedo');
            });
            //}
        });
    }
}