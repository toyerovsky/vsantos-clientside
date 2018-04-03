/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

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

    private showHud() {
        player.showHud = !player.showHud;
    }

    private showRadar() {
        player.showRadar = !player.showRadar;
    }

    private showChat() {
        player.showChat = !player.showChat;
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
                    mp.keys.bind(119, false, this.showHud); // F8
                    mp.keys.bind(120, false, this.showRadar); // F9
                    mp.keys.bind(121, false, this.showChat); // F10
                    mp.keys.bind(122, false, this.showCursor); // F11
                    mp.events.add(RageEvent.render, this.devToolsHandler);
                }
                else {
                    mp.keys.unbind(119, this.showHud); // F8
                    mp.keys.unbind(120, this.showRadar); // F9
                    mp.keys.unbind(121, this.showChat); // F10
                    mp.keys.unbind(122, this.showCursor); // F11
                    mp.events.remove(RageEvent.render, this.devToolsHandler);
                }
            }
        }, 500);
    }

    private devToolsHandler() {
        mp.game.graphics.drawText(`Pozycja: X: ${mp.players.local.position.x} Y: ${mp.players.local.position.y} Z: ${mp.players.local.position.z}`, [0.1, 0.01],
            {
                font: 4,
                color: [255, 255, 255, 255],
                scale: [0.35, 0.35],
                outline: true
            });
        mp.game.graphics.drawText("F8 HUD\nF9 Radar\nF10 Czat\nF11 Kursor", [0.05, 0.03],
            {
                font: 4,
                color: [255, 255, 255, 255],
                scale: [0.35, 0.35],
                outline: true
            });
    }
}