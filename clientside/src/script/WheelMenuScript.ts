/// <reference path="../../node_modules/@types/ragemp-c/index.d.ts" />

import IScript from "../core/interfaces/IScript";
import { Event, RageEvent } from "../core/enums/Event";
import { player } from "../core/LocalPlayer";
import Browser from "../core/Browser";
import WheelMenu from "../core/WheelMenu";

export default class WheelMenuScript implements IScript {

    /**
     * playerWheelMenuRequestedHandler
     */
    public requestWheelMenuHandler(jsonDataSource: string) {
        player.mainBrowser.changeUrl("package://wheel-menu/index.html", true, true, true);
        // player.wheelMenu = new WheelMenu();
        // player.wheelMenu.init(jsonDataSource);
        // player.wheelMenu.show();
        
        player.mainBrowser.execute(`init(${jsonDataSource})`);
        player.mainBrowser.show = true;
    }

    /**
     * start
     */
    public start(): void {
        mp.events.add(Event.showWheelMenu, (...args: any[]) => this.requestWheelMenuHandler(args[0]));

        mp.keys.bind(192 /* ` */, false, () => {
            if (player.mainBrowser.show === true) {
                player.mainBrowser.show = false;
                player.showCursor = false;
            }
            // if(player.wheelMenu.showStatus === true){
            //     player.wheelMenu.hide();
            //     player.showCursor = false;
            // }
            else {
                let startPosition = mp.players.local.position;
                //player.mainBrowser.show = !player.mainBrowser.show; 
                let endPosition = new mp.Vector3(
                    startPosition.x + Math.sin((-mp.players.local.getRotation(2).z * Math.PI) / 180) * 1.5,
                    startPosition.y + Math.cos((-mp.players.local.getRotation(2).z * Math.PI) / 180) * 1.5,
                    startPosition.z - 1);

                let hitObject = mp.raycasting.testPointToPoint(startPosition, endPosition, 0, 2 | 8);
                if (hitObject != null) {
                    mp.events.callRemote(Event.requestWheelMenu,
                        hitObject.entity.getVariable("Id"),
                        hitObject.entity.type
                    );
                }
            }

        });

        mp.events.add(Event.useWheelMenuItem, (name: string) => {
            mp.events.callRemote(Event.useWheelMenuItem, name)
            player.mainBrowser.show = false;
            player.showCursor = false;
            // player.wheelMenu.hide();
            // player.showCursor = false;
        });
    }
}