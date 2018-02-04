/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

export class Browser {
    
    private _browser : MpBrowser;
    public get browser() : MpBrowser {
        return this._browser;
    }

    constructor(url: string) {
        this._browser = mp.browsers.new(url);
    }
}