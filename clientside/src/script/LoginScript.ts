/// <reference path="../../node_modules/@types/ragemp-c/index.d.ts" />

import IScript from "../core/interfaces/IScript";
import { Event, RageEvent } from "../core/enums/Event";
import Browser from "../core/Browser";
import LocalPlayer, { player } from "../core/LocalPlayer";

export default class LoginScript implements IScript {

    /** 
     * handler sends login request from client to server
     * @param {string} email
     * @param {string} password
     */
    private _playerLoginRequestedHandler = (email: string, password: string) => {
        mp.events.callRemote(
            Event.playerLoginRequested,
            JSON.stringify({ email, password })
        );
    }

    /** 
     * handler is called after successfull login
     * @param {string} token WebApi token
     */
    private _playerLoginPassHandler = (token: string) => {
        player.login(token);
    }

    /**
     * handler is called after character is selected
     * @param {number} characterIndex
     */
    private _characterSelectRequested = (characterIndex: number) => {
        // select character with given index on list
        player.selectCharacter(characterIndex);
        // hide character select browser
        player.mainBrowser.show = false;
    }

    private setLoginCamera(): void {
        var loginCamera: CameraMp = mp.cameras.new("loginCamera");
        loginCamera.setCoord(-1650, -1030, 50);
        loginCamera.setRot(0, 0, 180, 0);
        loginCamera.setActive(true);
        mp.game.cam.renderScriptCams(true, false, 2, true, false);
    }

    /**
     * start
     */
    public start(): void {
        mp.players.local.freezePosition(true);
        this.setLoginCamera();

        // show login browser to player
        player.mainBrowser = new Browser("http://localhost:4200/login", true, false, false);
        // set the rage mp event handlers
        mp.events.add(Event.playerLoginRequested, this._playerLoginRequestedHandler);
        mp.events.add(Event.playerLoginPassed, this._playerLoginPassHandler);
        mp.events.add(Event.characterSelectRequested, this._characterSelectRequested);
    }
}
