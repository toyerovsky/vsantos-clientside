/// <reference path="../../node_modules/@types/ragemp-c/index.d.ts" />

import IScript from "../core/interfaces/IScript";
import { Event, RageEvent } from "../core/enums/Event";
import { player } from "../core/LocalPlayer";

export default class SpeedometrScript implements IScript {
    private speedometrHandler = () => {
        let veh = mp.players.local.vehicle;
        let speed = veh.getSpeed();
        mp.gui.chat.push(speed.toString());
    };

    /**
     * start
     */
    public start(): void {
        mp.events.add(Event.onPlayerEnterVehicle, (vehicle, seat) => {
            //setTimeout(() => {
            let speed = vehicle.getSpeed();
            mp.gui.chat.push(speed.toString());
            mp.events.add(RageEvent.render, this.speedometrHandler);
            // }, 2500);

            mp.events.add(RageEvent.playerLeaveVehicle, () => {
                mp.events.remove(RageEvent.render, this.speedometrHandler);
            });
        });
    }
}