/// <reference path="../../node_modules/@types/ragemp-c/index.d.ts" />

import IScript from "../core/interfaces/IScript";
import { Event, RageEvent } from "../core/enums/Event";
import { player } from "../core/LocalPlayer";
import { TimerType } from "../core/enums/TimerType";
import Timer from "../core/timer/Timer";

export default class BwTimerScript implements IScript {

    /**
     * playerTimerRequestedHandler
     */
    public playerBwTimerRequestedHandler(interval: number, end: Date = null) {
        mp.gui.chat.push("test0");
        let timer: Timer = new Timer(interval, end);
        timer.timerId = TimerType.bwTimer.toString();

        mp.events.add(RageEvent.render, (...args: any[]) => {
            let dateToDraw: Date = new Date();
            dateToDraw.setMilliseconds(Date.now() + timer.elapsed);
            mp.game.graphics.drawText(dateToDraw.toTimeString(), [mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z], {
                font: 4,
                centre: false,
                color: [255, 255, 255, 185],
                scale: [1.2, 1.2],
                outline: true,
            });
        });
        player.timers.push(timer);
        timer.start();
    }

    /**
     * playerTimerDestroyRequestedHandler
     */
    public playerBwTimerDestroyRequestedHandler() {
        let timerToStop: Timer = player.timers.find((t) => t.timerId == TimerType.bwTimer.toString());
        timerToStop.stop();
        player.timers.splice(player.timers.indexOf(timerToStop), 1);
    }

    /**
     * start
     */
    public start(): void {
        mp.events.add(Event.playerBwTimerRequested, (...args: any[]) => this.playerBwTimerRequestedHandler(args[0], args[1]));
        mp.events.add(Event.playerBwTimerDestroyRequested, (...args: any[]) => this.playerBwTimerDestroyRequestedHandler());
    }
}