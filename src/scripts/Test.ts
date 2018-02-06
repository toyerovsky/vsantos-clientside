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
        var browser = new Browser("http://localhost:8080", true);

        mp.events.add("testCefEvent", (...args: any[]) => {
            mp.gui.chat.push("Test CEF event!");
        });
    }
//
    testCefEvent() {
        mp.gui.chat.push("Test CEF function!");
    }
}