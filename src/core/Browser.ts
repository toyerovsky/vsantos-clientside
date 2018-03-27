/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

import { localPlayer } from './LocalPlayer';
import { RageEvent } from './enums/Event';

export default class Browser {
    private _tempCommands: string[] = [];
    private _ready: boolean = false;

    private _browser: MpBrowser;
    public get browser(): MpBrowser {
        return this._browser;
    }

    private _show: boolean = true;
    public get show(): boolean {
        return this._show;
    }
    public set show(value: boolean) {
        this._show = value;
        if (value)
            this._browser.execute("document.getElementsByTagName('BODY')[0].style.display = 'block'");
        else
            this._browser.execute("document.getElementsByTagName('BODY')[0].style.display = 'none'");
    }

    constructor(url: string, showCursor: boolean = true, showHud: boolean = true, showChat: boolean = true, hideOnStart: boolean = false) {
        this._browser = mp.browsers.new(url);
        if (hideOnStart)
            this.show = false;
        this.setHud(showCursor, showHud, showChat);
        this._ready = true;
    }

    changeUrl(url: string, showCursor: boolean = true, showHud: boolean = true, showChat = true) {
        this._ready = false;
        this.setHud(showCursor, showHud, showChat);
        this.browser.execute(`window.location.href = '${url}'`);

        mp.events.add(RageEvent.browserDomReady, (browser) => {
            this._ready = true;
            this._tempCommands.forEach(command => {
                this.execute(command);
            });
            this._tempCommands = [];
        });
    }


    execute(code: string) {
        if (this._ready) {
            this.browser.execute(code);
        } else {
            this._tempCommands.push(code);
        }
    }

    private setHud(showCursor: boolean, showHud: boolean, showChat: boolean) {
        localPlayer.showCursor = showCursor;
        localPlayer.showHud = showHud;
        localPlayer.showRadar = showHud;
        localPlayer.showChat = showChat;
    }
}