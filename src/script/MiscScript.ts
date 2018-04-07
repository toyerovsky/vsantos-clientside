/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

import IScript from "../core/interfaces/IScript";
import { player } from "./../core/LocalPlayer";

export default class MiscScript implements IScript {
    private showHud() {
        player.showHud = !player.showHud;
    }

    private showRadar() {
        player.showRadar = !player.showRadar;
    }

    private showChat() {
        player.showChat = !player.showChat;
    }

    /**
     * start
     */
    public start(): void {
        // let the player show/hide his hud/radar/chat
        mp.keys.bind(119, false, this.showHud); // F8
        mp.keys.bind(120, false, this.showRadar); // F9
        mp.keys.bind(121, false, this.showChat); // F10
    }
}