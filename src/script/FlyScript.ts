/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

import IScript from "../core/interfaces/IScript";
import { Event, RageEvent } from "../core/enums/Event";
import { player } from "./../core/LocalPlayer";

export default class FlyScript implements IScript {

    private _flyCamera: MpCamera = null;
    public get flyCamera(): MpCamera {
        return this._flyCamera;
    }
    public set flyCamera(v: MpCamera) {
        this._flyCamera = v;
    }

    /**
     * start
     */
    public start(): void {
        mp.events.add(Event.playerFreeCamRequested, (...args: any[]) => {
            if (this.flyCamera == null) {
                this.setCamera();
            } else {
                this.destroy();
            }
        });
    }

    private _freeCamHandler = (...args: any[]) => {
        var cameraRotation: MpVector3 = this.flyCamera.getRot(2);
        var cameraPosition: MpVector3 = this.flyCamera.getCoord();
        mp.players.local.position = new mp.Vector3(cameraPosition.x, cameraPosition.y, cameraPosition.z - 2.5);

        //mp.players.local.setRotation(0, 0, cameraRotation.z, 2, true);
        mp.gui.chat.push(JSON.stringify(this.flyCamera.getRot(2)));

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
            var oldPosition: MpVector3 = this.flyCamera.getCoord();
            var newx = -(Math.sin(yradian) * speed);
            var newy = Math.cos(yradian) * speed;
            var newz = Math.sin(xradian) * speed; // up or down					
            this.flyCamera.setCoord(oldPosition.x + newx, oldPosition.y + newy, oldPosition.z + newz)
        }

        if (mp.keys.isDown(83)) // s
        {
            var oldPosition: MpVector3 = this.flyCamera.getCoord();
            var newx = Math.sin(yradian) * speed;
            var newy = -(Math.cos(yradian) * speed);
            var newz = -(Math.sin(xradian) * speed); // up or down					
            this.flyCamera.setCoord(oldPosition.x + newx, oldPosition.y + newy, oldPosition.z + newz)
        }

        if (mp.keys.isDown(65)) // a
        {
            var oldPosition: MpVector3 = this.flyCamera.getCoord();
            var newx = -(Math.cos(yradian) * speed);
            var newy = -(Math.sin(yradian) * speed);
            var newz = Math.sin(xradian) * speed; // up or down					
            this.flyCamera.setCoord(oldPosition.x + newx, oldPosition.y + newy, oldPosition.z + newz)
        }
        if (mp.keys.isDown(68)) // d
        {
            var oldPosition: MpVector3 = this.flyCamera.getCoord();
            var newx = Math.cos(yradian) * speed;
            var newy = Math.sin(yradian) * speed;
            var newz = -(Math.sin(xradian) * speed); // up or down					
            this.flyCamera.setCoord(oldPosition.x + newx, oldPosition.y + newy, oldPosition.z + newz)
        }
    }

    private setCamera(): void {
        this.flyCamera = mp.cameras.new("flyCamera");
        this.flyCamera.setCoord(
            mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z
        );
        this.flyCamera.setActive(true);
        mp.game.cam.renderScriptCams(true, false, 0, true, false);
        mp.events.add(RageEvent.render, this._freeCamHandler);
    }

    private destroy(): void {
        mp.events.remove(RageEvent.render, this._freeCamHandler);
        this.flyCamera.destroy();
        player.defaultCamera.setActive(true);
        mp.game.cam.renderScriptCams(false, false, 0, true, true);
    }
}