/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

export default class Browser {

    private _browser: MpBrowser;
    public get browser(): MpBrowser {
        return this._browser;
    }

    constructor(url: string, cursor: boolean = false) {
        this._browser = mp.browsers.new(url);
        mp.gui.cursor.visible = cursor;
    }
}