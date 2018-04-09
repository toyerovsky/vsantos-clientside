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
        var defaultCameraRotation: MpVector3 = player.defaultCamera.getRot(2);

        this.flyCamera.setRot(defaultCameraRotation.x, defaultCameraRotation.y, defaultCameraRotation.z, 2);
        var flyCameraCoord: MpVector3 = this.flyCamera.getCoord();

        mp.players.local.position = new mp.Vector3(flyCameraCoord.x, flyCameraCoord.y, flyCameraCoord.z);
        mp.players.local.setRotation(defaultCameraRotation.x, defaultCameraRotation.y, defaultCameraRotation.z, 2, true);

        var speed: number = 1.5;
        if (mp.keys.isDown(16)) { /* Left Shift */
            speed = 7;
        } else if (mp.keys.isDown(17)) { /* Left Ctrl */
            speed = 0.75;
        }

        if (mp.keys.isDown(87)) // w
        {
            var oldPosition: MpVector3 = this.flyCamera.getCoord();
            var defaultCameraDirection = player.defaultCamera.getDirection();
            this.flyCamera.setCoord(
                oldPosition.x + defaultCameraDirection.x * speed,
                oldPosition.y + defaultCameraDirection.y * speed,
                oldPosition.z + defaultCameraDirection.z * speed
            );
        }
    }

    private setCamera(): void {
        this.flyCamera = mp.cameras.new("flyCamera");
        this.flyCamera.setCoord(
            mp.players.local.position.x,
            mp.players.local.position.y,
            mp.players.local.position.z
        );

        this.flyCamera.setActive(true);
        mp.game.cam.renderScriptCams(false, false, 0, true, true);

        mp.events.add(RageEvent.render, this._freeCamHandler);
    }

    private destroy(): void {
        mp.events.remove(RageEvent.render, this._freeCamHandler);

        this.flyCamera.destroy();
        this.flyCamera = null;

        player.defaultCamera.setActive(true);
        mp.game.cam.renderScriptCams(false, false, 0, true, true);
    }
}