/// <reference path="../../node_modules/@types/ragemp-c/index.d.ts" />

import IScript from "../core/interfaces/IScript";
import { player } from "../core/LocalPlayer";
import { Event, RageEvent } from "../core/enums/Event";

const MugShotScriptConsts = {
    boardPropName: "prop_police_id_board",
    textPropName: "prop_police_id_text",
    renderTargetName: "ID_Text",
    animDictionary: "mp_character_creation@lineup@male_a",
    animName: "loop_raised"
};

export default class MugshotScript implements IScript {
    private boardHandle: ObjectMp = null;
    private textHandle: ObjectMp = null;

    private scaleformHandle: number = null;
    private renderTargetID: number = null;

    /**
     * mugshotRequestedHandler
     */
    private mugshotRequestedHandler(title: string, topText: string, midText: string, bottomText: string) {
        if (this.boardHandle == null) {
            // create props
            this.boardHandle = mp.objects.new(
                mp.game.joaat(MugShotScriptConsts.boardPropName),
                mp.players.local.position,
                { alpha: 255, dimension: 0 }
            );

            this.textHandle = mp.objects.new(
                mp.game.joaat(MugShotScriptConsts.textPropName),
                mp.players.local.position,
                { alpha: 255, dimension: 0 }
            );

            // load scaleform & set up the content
            this.scaleformHandle = mp.game.graphics.requestScaleformMovie("mugshot_board_01");
            var scaleformInterval = setInterval(() => {
                if (mp.game.graphics.hasScaleformMovieLoaded(this.scaleformHandle)) {
                    mp.game.graphics.pushScaleformMovieFunction(this.scaleformHandle, "SET_BOARD");
                    mp.game.graphics.pushScaleformMovieFunctionParameterString(title);
                    mp.game.graphics.pushScaleformMovieFunctionParameterString(midText);
                    mp.game.graphics.pushScaleformMovieFunctionParameterString(bottomText);
                    mp.game.graphics.pushScaleformMovieFunctionParameterString(topText);
                    mp.game.graphics.pushScaleformMovieFunctionParameterInt(0);
                    mp.game.graphics.popScaleformMovieFunctionVoid();
                    // set up rendertarget
                    mp.game.ui.registerNamedRendertarget(MugShotScriptConsts.renderTargetName, false);
                    mp.game.ui.linkNamedRendertarget(mp.game.joaat(MugShotScriptConsts.textPropName));
                    this.renderTargetID = mp.game.ui.getNamedRendertargetRenderId(MugShotScriptConsts.renderTargetName);

                    // attach to the player
                    this.boardHandle.attachTo(mp.players.local.handle, mp.players.local.getBoneIndex(28422),
                        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, false, false, false, false, 2, true);
                    this.textHandle.attachTo(mp.players.local.handle, mp.players.local.getBoneIndex(28422),
                        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, false, false, false, false, 2, true);
                    clearInterval(scaleformInterval);
                }
            }, 5);

            mp.game.streaming.requestAnimDict(MugShotScriptConsts.animDictionary);
            var animInterval = setInterval(() => {
                if (mp.game.streaming.hasAnimDictLoaded(MugShotScriptConsts.animDictionary)) {
                    mp.players.local.taskPlayAnim(MugShotScriptConsts.animDictionary, MugShotScriptConsts.animName,
                        8.0, -8.0, -1, 1, 0.0, false, false, false);
                    clearInterval(animInterval);
                }
            }, 5);

            player.hasMugshotBoard = true;
        }
    }

    private mugshotDestroyRequestedHandler() {
        if (this.boardHandle != null)
            this.boardHandle.destroy();
        if (this.textHandle != null)
            this.textHandle.destroy();
        if (this.scaleformHandle != null)
            mp.game.graphics.setScaleformMovieAsNoLongerNeeded(this.scaleformHandle);
        if (this.renderTargetID != null) {
            // should be renderTargetName string but says "expected Number", whatever
            mp.game.ui.releaseNamedRendertarget(mp.game.joaat(MugShotScriptConsts.renderTargetName));
        }
        this.boardHandle = null;
        this.textHandle = null;
        this.scaleformHandle = null;
        this.renderTargetID = null;

        mp.players.local.stopAnimTask(MugShotScriptConsts.animDictionary, MugShotScriptConsts.animName, -4.0);

        if (mp.game.streaming.hasAnimDictLoaded(MugShotScriptConsts.animDictionary))
            mp.game.streaming.removeAnimDict(MugShotScriptConsts.animDictionary);

        player.hasMugshotBoard = false;
    }

    private renderHandler = (...args: any[]) => {
        if (this.scaleformHandle != null && this.renderTargetID != null) {
            mp.game.ui.setTextRenderId(this.renderTargetID);
            mp.game.graphics.drawScaleformMovie(this.scaleformHandle, 0.405, 0.37, 0.81, 0.74, 255, 255, 255, 255, 0);
            mp.game.ui.setTextRenderId(1);
        }
    }

    /**
     * start
     */
    public start(): void {
        mp.events.add(Event.playerMugshotRequested, (...args: any[]) => {
            let title: string = args[0];
            let topText: string = args[1];
            let midText: string = args[2];
            let bottomText: string = args[3];
            this.mugshotRequestedHandler(title, topText, midText, bottomText);
            mp.events.add(RageEvent.render, this.renderHandler);
        });

        mp.events.add(Event.playerMugshotDestroyRequested, (...args: any[]) => {
            this.mugshotDestroyRequestedHandler();
            mp.events.remove(RageEvent.render, this.renderHandler);
        });
    }
}