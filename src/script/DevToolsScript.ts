/// <reference path="../../node_modules/@types/ragemp-c/index.d.ts" />

import IScript from "../core/interfaces/IScript";
import { Event, RageEvent } from "../core/enums/Event";
import { player } from "./../core/LocalPlayer";

export default class DevToolsScript implements IScript {

    private _isActive: boolean;
    public get isActive(): boolean {
        return this._isActive;
    }
    public set isActive(value: boolean) {
        this._isActive = value;
    }

    private showCursor() {
        player.showCursor = !player.showCursor;
    }

    /**
     * start
     */
    public start(): void {
        setInterval(() => {
            if (mp.keys.isDown(16) && mp.keys.isDown(17) && mp.keys.isDown(18) && mp.keys.isDown(68)) { // Ctrl + Shift + Alt + D
                this.isActive = !this.isActive;
                if (this.isActive) {
                    mp.keys.bind(122, false, this.showCursor); // F11
                    mp.events.add(RageEvent.render, this.devToolsHandler);
                }
                else {
                    mp.keys.unbind(122, false, this.showCursor); // F11
                    mp.events.remove(RageEvent.render, this.devToolsHandler);
                }
            }
        }, 400);
    }

    private devToolsHandler() {
        let textToDraw = `Pozycja:\n
            X: ${mp.players.local.position.x}\n
            Y: ${mp.players.local.position.y}\n
            Z: ${mp.players.local.position.z}\n
            Rotacja:\n
            Pitch: ${mp.players.local.getPitch()}\n
            Roll: ${mp.players.local.getRoll()}\n
            Yaw: ${mp.players.local.getRotation(2).z}\n
            
            F11 Kursor`;

        mp.game.graphics.drawText(textToDraw, [0.1, 0.01],
            {
                font: 4,
                color: [255, 255, 255, 255],
                centre: false,
                scale: [0.35, 0.35],
                outline: true
            });
    }
}