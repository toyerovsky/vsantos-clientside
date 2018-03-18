/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

import { Script } from "../core/Script";
import { Event, RageEvent } from "../core/enums/Events";
import Browser from "../core/Browser";
import LocalPlayer from "../core/LocalPlayer";

class LoginData {
    public email: string;
    public password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

class CharacterData {
    public name: string;
    public surname: string;
    public money: number;
    public playedTime: Date;

    constructor(name: string, surname: string, money: number, playedTime: Date) {
        this.name = name;
        this.surname = surname;
        this.money = money;
        this.playedTime = playedTime;
    }
}

export default class LoginScript extends Script {
    constructor() {
        super();
    }

    /**
     * start
     */
    public start(): void {
        super.start();

        this.setLoginCamera();

        var browser: Browser = new Browser("package://login/index.html", true, false, false);

        mp.events.add(Event.playerLoginRequested, (...args: any[]) => {
            mp.events.callRemote(Event.playerLoginRequested, JSON.stringify(new LoginData(args[0], args[1])));
        });

        mp.events.add(Event.playerLoginPassed, (...args: any[]) => {
            var localPlayer: LocalPlayer = LocalPlayer.getLocalPlayer();
            localPlayer.login(args[1]);
            var characters: CharacterData[] = JSON.parse(args[0]);
            browser.changeUrl("package://characterSelect/index.html", true, false, false);
            browser.execute(`prepareData('${JSON.stringify(characters)}')`);
        });
    }

    private setLoginCamera() {
        var loginCamera: MpCamera = mp.cameras.new("loginCamera");
        loginCamera.setCoord(-1650, -1030, 50);
        loginCamera.setRot(0, 0, 180, 0);
        loginCamera.setActive(true);
        mp.game.cam.renderScriptCams(true, false, 0, true, false);
    }
}