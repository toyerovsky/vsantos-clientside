/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

export default class Browser {

    private _showHud: boolean = true;
    private _showCursor: boolean = false;
    private _showChat: boolean = true;

    private _tempCommands: string[] = [];
    private _ready: boolean = false;

    private _browser: MpBrowser;
    public get browser(): MpBrowser {
        return this._browser;
    }

    constructor(url: string, showCursor: boolean = true, showHud: boolean = true, showChat = true) {
        this._browser = mp.browsers.new(url);
        this.setHud(showCursor, showHud, showChat);
    }

    changeUrl(url: string, showCursor: boolean = true, showHud: boolean = true, showChat = true) {
        this._ready = false;
        this.setHud(showCursor, showHud, showChat);
        this.browser.execute(`window.location = '${url}'`);
        
        mp.events.add('browserDomReady', (browser) => {
            this._ready = true;
            this._tempCommands.forEach(command => {
                this.execute(command);
            });
            this._tempCommands = [];
        });
    }

    execute(code: string) {
        if (this._ready)
            this.browser.execute(code);
        else
            this._tempCommands.push(code);
    }

    private setHud(showCursor: boolean, showHud: boolean, showChat: boolean) {
        if (showCursor != this._showCursor) {
            this._showCursor = showCursor;
            mp.gui.cursor.visible = showCursor;
        }
        if (showHud != this._showHud) {
            this._showHud = showHud;
            mp.game.ui.displayHud(showHud);
            mp.game.ui.displayRadar(showHud);
        }
        if (showChat != this._showChat) {
            this._showChat = showChat;
            mp.gui.chat.activate(showChat);
        }
    }
}