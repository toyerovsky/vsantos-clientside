export default class Timer {
    private _intervalId: number;

    private _timerId: string;
    public get timerId(): string {
        return this._timerId;
    }
    public set timerId(v: string) {
        this._timerId = v;
    }

    private _interval: number;
    public get interval(): number {
        return this._interval;
    }
    public set interval(v: number) {
        this._interval = v;
    }

    private _elapsed: number = 0;
    public get elapsed(): number {
        return this._elapsed;
    }
    public set elapsed(v: number) {
        this._elapsed = v;
    }

    private _end: Date = null;
    public get end(): Date {
        return this._end;
    }
    public set end(v: Date) {
        this._end = v;
    }

    constructor(interval: number, end: Date = null) {
        this.interval = interval;
        this.end = end;
    }

    /**
     * starts the timer with given callback
     * @param callback function which is called every defined time
     */
    startWithCallback(callback: () => void): void {
        if (this.end != null)
            callback = () => {
                callback();
                if (Date.now() >= this.end.getMilliseconds())
                    clearInterval(this._intervalId);
            }

        callback = () => {
            callback();
            this.elapsed++;
        }

        this._intervalId = setInterval(callback as any, this.interval);
    }

    /**
     * starts the timer
     */
    start(): void {
        let callback = () => {
            this.elapsed++;
        };
        
        this._intervalId = setInterval(callback as any, this.interval);
    }

    /**
     * pause and reset the timer
     */
    stop(): void {
        this.pause();
        this.reset();
    }

    /**
     * reset the timer,
     * 
     */
    reset(): void {
        this.elapsed = 0;
    }

    pause(): void {
        clearInterval(this._intervalId);
    }
}