/// <reference path="../../node_modules/@types/ragemp-c/index.d.ts" />

import { player } from './LocalPlayer';
import { RageEvent } from './enums/Event';

export default class Browser {
    private _url: string;
    public get url(): string {
        return this._url;
    }
    public set url(v: string) {
        this._url = v;
    }

    private _tempCommands: string[] = [];
    private _ready: boolean = false;

    private _mpBrowser: BrowserMp;
    public get mpBrowser(): BrowserMp {
        return this._mpBrowser;
    }

    private _show: boolean = true;
    public get show(): boolean {
        return this._show;
    }

    private _tempCommandsHandler = (browser:any) => {
        this._ready = true;
        this._tempCommands.forEach(command => {
            this.execute(command);
        });
        this._tempCommands = [];
    }

    public set show(value: boolean) {
        this._show = value;
        if (value)
            this._mpBrowser.execute("document.getElementsByTagName('BODY')[0].style.display = 'block'");
        else
            this._mpBrowser.execute("document.getElementsByTagName('BODY')[0].style.display = 'none'");
    }

    constructor(url: string, showCursor: boolean = true, showHud: boolean = true, showChat: boolean = true, hideOnStart: boolean = false) {
        this.url = url;
        this._mpBrowser = mp.browsers.new(url);
        if (hideOnStart)
            this.show = false;
        if (!(showCursor && showHud && showChat))
            this.setHud(showCursor, showHud, showChat);
        this._ready = true;
    }

    // public changeUrl(url: string, showCursor: boolean = true, showHud: boolean = true, showChat = true) {
    //     this.setHud(showCursor, showHud, showChat);
    //     if (url != this.url) {
    //         this._ready = false;
    //         this.url = url;
    //         this.mpBrowser.execute(`window.location.href = '${url}'`);
    //         mp.events.add(RageEvent.browserDomReady, this._tempCommandsHandler);
    //     }
    // }

    public changeUrl(url: string, showCursor: boolean = true, showHud: boolean = true, showChat = true) { 
        this._ready = false; 
        this.setHud(showCursor, showHud, showChat); 
        this.mpBrowser.execute(`window.location.href = '${url}'`); 
 
        mp.events.add(RageEvent.browserDomReady, (browser) => { 
            this._ready = true; 
            this._tempCommands.forEach(command => { 
                this.execute(command); 
            }); 
            this._tempCommands = []; 
        }); 
    }

    public execute(code: string) {
        if (this._ready) {
            this.mpBrowser.execute(code);
        } else {
            this._tempCommands.push(code);
        }
    }

    private setHud(showCursor: boolean, showHud: boolean, showChat: boolean) {
        player.showCursor = showCursor;
        player.showHud = showHud;
        player.showRadar = showHud;
        player.showChat = showChat;
    }

    /**
     * destroys the current browser
     */
    public destroy() {
        this.mpBrowser.destroy();
    }
}