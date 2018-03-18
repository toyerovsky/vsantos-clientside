/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

import * as ConstantNames from './constant/ConstantNames';
import Notifier from './notifications/Notifier';
export default class LocalPlayer {
    /**
     * getLocalPlayer
     */
    public static getLocalPlayer() {
        return JSON.parse(localStorage.getItem(ConstantNames.localStoragePlayer));
    }

    private _accountId: number;
    public get accountId(): number {
        return this._accountId;
    }

    private _characterId: number;
    public get characterId(): number {
        return this._characterId;
    }

    private _notifier: Notifier;
    public get mainNotifier(): Notifier {
        return this._notifier;
    }

    constructor() {
        localStorage.setItem(ConstantNames.localStoragePlayer, JSON.stringify(this))
    }

    /**
     * login
     */
    public login(accountId: number) {
        this._accountId = accountId;
        this.save();
    }

    /**
     * selectCharacter
     */
    public selectCharacter(characterId: number) {
        this._characterId = characterId;
        this.save();
    }

    private save() {
        localStorage.setItem(ConstantNames.localStoragePlayer, JSON.stringify(this));
    }
}