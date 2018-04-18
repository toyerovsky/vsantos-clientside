/// <reference path="../../node_modules/@types/ragemp-c/index.d.ts" />

import Notifier from './Notifier';
import Browser from './Browser';
import Timer from './timer/Timer';
import { Event, RageEvent } from './enums/Event';

export default class LocalPlayer {
    private _timers: Timer[];
    public get timers(): Timer[] {
        return this._timers;
    }
    public set timers(v: Timer[]) {
        this._timers = v;
    }

    private _hasMugshotBoard: boolean;
    public get hasMugshotBoard(): boolean {
        return this._hasMugshotBoard;
    }
    public set hasMugshotBoard(v: boolean) {
        this._hasMugshotBoard = v;
    }
    private _defaultCamera: CameraMp;
    public get defaultCamera(): CameraMp {
        return this._defaultCamera;
    }
    public set defaultCamera(v: CameraMp) {
        this._defaultCamera = v;
    }

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

    private _showMoney: boolean;
    public get showMoney(): boolean {
        return this._showMoney;
    }
    public set showMoney(v: boolean) {
        this._showMoney = v;
    }

    private _token: string;
    public get token(): string {
        return this._token;
    }

    private _notifier: Notifier;
    public get notifier(): Notifier {
        return this._notifier;
    }
    public set notifier(value: Notifier) {
        this._notifier = value;
    }

    private _mainBrowser: Browser;
    public get mainBrowser(): Browser {
        return this._mainBrowser;
    }
    public set mainBrowser(v: Browser) {
        this._mainBrowser = v;
    }

    /**
     * login
     */
    public login(token: string) {
        this._token = token;
    }

    private _moneyInWallet: number = 0.00;

    /**
     * selectCharacter
     */
    public selectCharacter(characterIndex: number) {
        mp.events.callRemote(Event.characterSelectRequested, characterIndex);
        mp.events.add(Event.characterMoneyChangeRequested, (...args: any[]) => {
            this._moneyInWallet = parseFloat(args[0]);
        });

        mp.events.add(RageEvent.render, (...args: any[]) => {
            if (this.showMoney) {
                mp.game.graphics.drawText(`$${this._moneyInWallet.toFixed(2)}`, [0.95, 0.05],
                    {
                        font : 7,
                        centre: false,
                        color: [238, 255, 252, 250],
                        scale: [0.70, 0.70],
                        outline: true
                    });
            }
        })

        this.showChat = true;
        this.showCursor = false;
        this.showHud = true;
        this.showRadar = true;
        this.showMoney = true;

        this.restoreDefaultCamera();

        mp.players.local.freezePosition(false);

        this.mainBrowser = new Browser("package://empty/empty.html", false, true, true, true);
    }

    /**
     * restoreDefaultCamera
     */
    public restoreDefaultCamera() {
        this.defaultCamera = mp.cameras.new("gameplay");
        this.defaultCamera.setActive(true);
        mp.game.cam.renderScriptCams(false, false, 0, true, true);
    }
}

export const player: LocalPlayer = new LocalPlayer();