/// <reference path="../../node_modules/@types/ragemp-c/index.d.ts" />

import IScript from "../core/interfaces/IScript";
import { Event, RageEvent } from "../core/enums/Event";
import { player } from "../core/LocalPlayer";
import Speedometr from "../core/Speedometr";

export default class SpeedometrScript implements IScript {
    private speedometrHandler = () => {
        let veh = mp.players.local.vehicle;
        let speed = veh.getSpeed()*3.6;
        let rpm = veh.rpm*10;
        let gear = (veh.gear == 0) ? 'R' : veh.gear;
        player.speedometr.setSpeed(speed);
        player.speedometr.setRPM(rpm);
        player.speedometr.setGear(gear);
        //mp.gui.chat.push(speed.toString());
    };

    /**
     * start
     */
    public start(): void {
        player.speedometr = new Speedometr();
        player.speedometr.hideSpeedo();
        mp.events.add(Event.onPlayerEnterVehicle, (vehicle, seat) => {
            //setTimeout(() => {
           
            player.speedometr.showSpeedo();
            player.speedometr.setSpeed(0);
            player.speedometr.setRPM(0);
            player.speedometr.setGear(0);
            let speed = vehicle.getSpeed()*3.6;
            let rpm = vehicle.rpm*10;
            let gear = vehicle.gear;
            
            player.speedometr.setSpeed(speed);
            player.speedometr.setRPM(rpm);
            player.speedometr.setGear(gear);
           // mp.gui.chat.push(speed.toString());
            mp.events.add(RageEvent.render, this.speedometrHandler);
            // }, 2500);

            mp.events.add(RageEvent.playerLeaveVehicle, () => {
                mp.events.remove(RageEvent.render, this.speedometrHandler);
                player.speedometr.setSpeed(0);
                player.speedometr.setRPM(0);
                player.speedometr.setGear(0);
                player.speedometr.hideSpeedo();
            });
        });
    }
}