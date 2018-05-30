/// <reference path="../../node_modules/@types/ragemp-c/index.d.ts" />

import IScript from "../core/interfaces/IScript";
import { player } from "../core/LocalPlayer";
import { RageEvent, Event } from "../core/enums/Event";

export default class LogOutScript implements IScript {

    private _playerlogOutHandler = (...args: any[]) => {
        const config = require("../config.json");

        fetch(`${config.apiUrl}/account/logout`, {
            body: JSON.stringify({
                userGuid: player.userToken
            }),
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST', 
            mode: 'cors',
            redirect: 'follow', 
            referrer: 'no-referrer',
        });
    }

    /**
     * start
     */
    public start(): void {
        mp.events.add(RageEvent.playerQuit, this._playerlogOutHandler);
    }
}