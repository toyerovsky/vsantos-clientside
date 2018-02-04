/// <reference path="../../node_modules/types-ragemp-client/index.d.ts" />

import { Script } from "../core/Script";
import { Events } from "../core/enums/Events";
import { Browser } from "../core/Browser";

export class Test extends Script {
    constructor() {
        super();
    }

    /**
     * start
     */
    public start(): void {
        super.start();
        new Browser("http://localhost:8080");

        // mp.events.add(Events.playerJoin, (...args: any[]) => {
        //     mp.gui.chat.push("Witaj na serwerze!");
        // });
        // mp.gui.chat.push("Witaj na serwerze!");
    }   
}