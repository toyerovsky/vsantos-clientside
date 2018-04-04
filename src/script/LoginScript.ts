/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

import IScript from "../core/interfaces/IScript";
import { Event, RageEvent } from "../core/enums/Event";
import Browser from "../core/Browser";
import { NotificationType } from "../core/enums/NotificationType";
import { player } from "../core/LocalPlayer";

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

const _characterSelectBrowser: Browser = new Browser("package://characterSelect/index.html", true, false, false, true);
const _loginBrowser: Browser = new Browser("package://login/index.html", true, false, false);

export default class LoginScript implements IScript {
    /**
     * @param args 
     * args[0] WebApi token 
     * args[1] AccountId
     */
    private playerLoginPassHandler(...args: any[]): void {
        var token: string = args[0];
        var accountId: number = args[1];

        player.login(token);
        _characterSelectBrowser.execute(`window.accountId = '${accountId}';`);
        _loginBrowser.destroy();
        _characterSelectBrowser.execute('prepareData()');
        _characterSelectBrowser.show = true;
    }

    private playerLoginRequestedHandler(...args: any[]): void {
        mp.events.callRemote(Event.playerLoginRequested, JSON.stringify(new LoginData(args[0], args[1])));
    }

    private characterSelectRequested(...args: any[]): void {
        var characterIndex: number = args[0];
        player.selectCharacter(characterIndex);
        _characterSelectBrowser.destroy();
    }

    private setLoginCamera() {
        var loginCamera: MpCamera = mp.cameras.new("loginCamera");
        loginCamera.setCoord(-1650, -1030, 50);
        loginCamera.setRot(0, 0, 180, 0);
        loginCamera.setActive(true);
        mp.game.cam.renderScriptCams(true, false, 0, true, false);
    }

    /**
     * start
     */
    public start(): void {
        mp.players.local.freezePosition(true);
        this.setLoginCamera();

        // set the rage mp events
        mp.events.add(Event.playerLoginRequested, this.playerLoginRequestedHandler);
        mp.events.add(Event.playerLoginPassed, this.playerLoginPassHandler);
        mp.events.add(Event.characterSelectRequested, this.characterSelectRequested);
    }
}
