/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

import IScript from "../core/interfaces/IScript";
import { Event, RageEvent } from "../core/enums/Event";
import { player } from "./../core/LocalPlayer";

export default class FlyScript implements IScript {
    private _freeCam: MpCamera = null;

    private freeCamHandler() {
        var cameraRotation: MpVector3 = this._freeCam.getRot(2);
        mp.gui.chat.push('test');
        mp.players.local.position = new mp.Vector3(this._freeCam.position.x, this._freeCam.position.y, this._freeCam.position.z - 2.5);
        mp.players.local.setRotation(0, 0, cameraRotation.z, 2, true);

        var xradian = ((cameraRotation.x * Math.PI) / 180);
        var yradian = ((cameraRotation.y * Math.PI) / 180);
        var zradian = ((cameraRotation.z * Math.PI) / 180);

        var speed: number = 0.5;
        if (mp.keys.isDown(16)) // Left Shift 
        {
            speed = 1.5;
        }

        if (mp.keys.isDown(87)) // w
        {
            var oldPosition: MpVector3 = this._freeCam.position;
            var newx = -(Math.sin(yradian) * speed);
            var newy = Math.cos(yradian) * speed;
            var newz = Math.sin(xradian) * speed; // up or down					
            this._freeCam.position = new mp.Vector3(oldPosition.x + newx, oldPosition.y + newy, oldPosition.z + newz);

        }

        if (mp.keys.isDown(83)) // s
        {
            var oldPosition: MpVector3 = this._freeCam.position;

            var newx = Math.sin(yradian) * speed;
            var newy = -(Math.cos(yradian) * speed);
            var newz = -(Math.sin(xradian) * speed); // up or down					
            this._freeCam.position = new mp.Vector3(oldPosition.x + newx, oldPosition.y + newy, oldPosition.z + newz);

        }

        if (mp.keys.isDown(65)) // a
        {
            var oldPosition: MpVector3 = this._freeCam.position;

            var newx = -(Math.cos(yradian) * speed);
            var newy = -(Math.sin(yradian) * speed);
            var newz = Math.sin(xradian) * speed; // up or down					
            this._freeCam.position = new mp.Vector3(oldPosition.x + newx, oldPosition.y + newy, oldPosition.z + newz);

        }
        if (mp.keys.isDown(68)) // d
        {
            var oldPosition: MpVector3 = this._freeCam.position;
            var newx = Math.cos(yradian) * speed;
            var newy = Math.sin(yradian) * speed;
            var newz = -(Math.sin(xradian) * speed); // up or down					
            this._freeCam.position = new mp.Vector3(oldPosition.x + newx, oldPosition.y + newy, oldPosition.z + newz);

        }
    }

    /**
     * start
     */
    public start(): void {
        mp.events.add(Event.playerFreeCamRequested, (...args: any[]) => {
            if (this._freeCam == null) {
                this.setFreeCam();
            } else {
                this.destroy();
            }
        });
    }

    private setFreeCam() {
        this._freeCam = mp.cameras.new("freeCam");
        this._freeCam.setActive(true);
        mp.game.cam.renderScriptCams(true, false, 0, true, false);
        mp.events.add(RageEvent.render, (...args: any[]) => this.freeCamHandler);
    }

    private destroy() {
        mp.events.remove(RageEvent.render, (...args: any[]) => this.freeCamHandler);
        this._freeCam.destroy();
        this._freeCam = null;
        player.defaultCamera.setActive(true);
        mp.game.cam.renderScriptCams(false, false, 0, true, true);
    }
}