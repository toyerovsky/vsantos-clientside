/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

import { Script } from "../core/Script";
import { Event } from "../core/enums/Events";
import Browser from "../core/Browser";

class LoginData {
    public login: string;
    public password: string;

    constructor(login: string, password: string) {
        this.login = login;
        this.password = password;
    }
}

class CharacterData {
    public name: string;
    public surname: string;
    public money: number;
    public timePlayed: Date;

    constructor(name: string, surname: string, money: number, timePlayed: Date) {
        this.name = name;
        this.surname = surname;
        this.money = money;
        this.timePlayed = timePlayed;
    }
}

export class LoginScript extends Script {
    constructor() {
        super();
    }

    /**
     * start
     */
    public start(): void {
        super.start();
        var browser = new Browser("package://login_pyrpl/index.html", true);

        mp.events.add(Event.playerLoginRequested, (...args: any[]) => {
            mp.events.callRemote(Event.playerLoginRequested, JSON.stringify(new LoginData(args[0], args[1])));
        });

        mp.events.add(Event.playerLoginPassed, (...args: any[]) => {
            var characters: CharacterData[] = JSON.parse(args[0]);
            
            browser.browser.url = "package://character_select_pyrpl/index.html";
            browser.browser.reload(false);
            browser.browser.execute(`prepareData(${JSON.stringify(characters)})`);
        });

    }
}