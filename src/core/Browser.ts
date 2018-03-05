/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

export default class Browser {

    private _browser: MpBrowser;
    public get browser(): MpBrowser {
        return this._browser;
    }

    constructor(url: string, showCursor: boolean = true, showHud: boolean = true) {
        mp.gui.cursor.visible = showCursor;
        mp.game.ui.displayHud(showHud);
        mp.game.ui.setMinimapVisible(!showHud);
        this._browser = mp.browsers.new(url);
    }

    changeUrl(url: string, showCursor: boolean = true, showHud: boolean = true) {
        mp.gui.cursor.visible = showCursor;
        mp.game.ui.displayHud(showHud);
        mp.game.ui.setMinimapVisible(!showHud);
        this.browser.execute("window.location = 'package://characterSelect/index.html'");
    }

    execute(code: string) {
        this.browser.execute(code);
    }
}