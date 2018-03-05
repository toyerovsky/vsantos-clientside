/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

import { Script } from "../core/Script";
import { Event } from "../core/enums/Events";
import Browser from "../core/Browser";

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

        mp.gui.chat.activate(false);

        this.setLoginCamera();

        var browser: Browser = new Browser("package://login/index.html", true, false);

        mp.events.add(Event.playerLoginRequested, (...args: any[]) => {
            mp.events.callRemote(Event.playerLoginRequested, JSON.stringify(new LoginData(args[0], args[1])));
        });

        mp.events.add(Event.playerLoginPassed, (...args: any[]) => {
            var characters: CharacterData[] = JSON.parse(args[0]);

            browser.changeUrl("package://characterSelect/index.html", true, false);
            mp.gui.chat.push(JSON.stringify(args[0]));

            
            browser.execute("test();");
            //browser.execute(`prepareData(${JSON.stringify(characters)})`);
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