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

    constructor(name: string, surname: string, money: number, timePlayed: Date) {
        this.name = name;
        this.surname = surname;
        this.money = money;
        this.playedTime = timePlayed;
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
        var loginCamera = mp.cameras.new("loginCamera");
        loginCamera.setCoord(-1650, -1030, 50);
        loginCamera.setRot(0, 0, 180, 0);
        loginCamera.setActive(true);

        var browser = new Browser("package://login/index.html", true);

        mp.events.add(Event.playerLoginRequested, (...args: any[]) => {
            mp.events.callRemote(Event.playerLoginRequested, JSON.stringify(new LoginData(args[0], args[1])));
        });

        mp.events.add(Event.playerLoginPassed, (...args: any[]) => {
            
            var characters: CharacterData[] = JSON.parse(args[0]);
            
            browser.browser.url = "package://characterSelect/index.html";
            browser.browser.reload(false);
            
            mp.gui.chat.push(JSON.stringify(args[0]));
            browser.browser.execute(`prepareData(${JSON.stringify(characters)})`);
        });

    }
}