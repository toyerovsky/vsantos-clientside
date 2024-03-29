import Browser from "./Browser";

export default class Speedometr {
    private _speedometrbrowser: Browser = new Browser("package://speedometr/test.html");

    public showSpeedo(): void {
        this._speedometrbrowser.show = true;
    }

    public hideSpeedo(): void {
        this._speedometrbrowser.show = false;
    }

    public setSpeed(speed: number): void {
        this._speedometrbrowser.execute(`setSpeed(${speed})`);
    }

    public setRPM(rpm: number): void {
        this._speedometrbrowser.execute(`setRPM(${rpm})`);
    }

    public setGear(gear: number): void {
        this._speedometrbrowser.execute(`setGear(${gear})`);
    }
}