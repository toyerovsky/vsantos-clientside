/// <reference path="../../node_modules/@types/ragemp-c/index.d.ts" />

const maxDistance = 25 * 25;
const width = 0.03;
const height = 0.0065;
const border = 0.001;
const color = [255, 255, 255, 255];

import IScript from "../core/interfaces/IScript";
import { Event, RageEvent } from "../core/enums/Event";
import { player } from "../core/LocalPlayer";

export default class NametagsScript implements IScript {

    /**
     * start
     */
    public start(): void {
        // mp.nametags.set({
        //     font: 6,
        //     outline: true,
        //     offset: 0.7,
        //     veh_offset: 1.0,
        //     color: [255, 255, 255, 255],
        //     size: 0.5,

        //     // hbar: {
        //     //     size: [0.06, 0.008],
        //     //     color: [0, 0, 0, 0],
        //     //     bg_color: [0, 0, 0, 0]
        //     // },
        // });
    }
}