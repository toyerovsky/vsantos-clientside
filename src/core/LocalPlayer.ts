/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

import Notifier from './notifications/Notifier';
import Browser from './Browser';

export default class LocalPlayer {

    private _showCursor: boolean;
    public get showCursor(): boolean {
        return this._showCursor;
    }
    public set showCursor(v: boolean) {
        this._showCursor = v;
        mp.gui.cursor.visible = v;
    }

    private _showHud: boolean;
    public get showHud(): boolean {
        return this._showHud;
    }
    public set showHud(v: boolean) {
        this._showHud = v;
        mp.game.ui.displayHud(v);
    }

    private _showRadar: boolean;
    public get showRadar(): boolean {
        return this._showRadar;
    }
    public set showRadar(v: boolean) {
        this._showRadar = v;
        mp.game.ui.displayRadar(v);
    }

    private _showChat: boolean;
    public get showChat(): boolean {
        return this._showChat;
    }
    public set showChat(v: boolean) {
        this._showChat = v;
        mp.gui.chat.activate(v);
    }

    private _token: string;
    public get token(): string {
        return this._token;
    }

    private _notifier: Notifier;
    public get mainNotifier(): Notifier {
        return this._notifier;
    }


    private _mainBrowser: Browser;
    public get currentBrowser(): Browser {
        return this._mainBrowser;
    }
    public set currentBrowser(v: Browser) {
        this._mainBrowser = v;
    }

    /**
     * login
     */
    public login(token: string) {
        this._token = token;
    }
}

export const localPlayer: LocalPlayer = new LocalPlayer();