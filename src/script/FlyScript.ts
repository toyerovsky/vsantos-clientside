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
        var cameraRotation: MpVector3 = this.flyCamera.getRot(2);

        var cameraPosition: MpVector3 = this.flyCamera.getCoord();
        mp.players.local.position = new mp.Vector3(cameraPosition.x, cameraPosition.y, cameraPosition.z);

        var speed: number = 1;
        if (mp.keys.isDown(16)) { /* Left Shift */
            speed = 5;
        } else if (mp.keys.isDown(17)) { /* Left Ctrl */
            speed = 0.5;
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
            mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z
        );
        this.flyCamera.setActive(true);
        mp.players.local.setVisible(false, true);
        mp.game.cam.renderScriptCams(false, false, 0, true, true);
        mp.events.add(RageEvent.render, this._freeCamHandler);
    }

    private destroy(): void {
        mp.events.remove(RageEvent.render, this._freeCamHandler);
        player.defaultCamera.setActive(true);
        mp.game.cam.renderScriptCams(false, false, 0, true, true);
        this.flyCamera = null;
        mp.players.local.setVisible(true, false);
    }
}