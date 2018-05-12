import Browser from "./Browser";




export default class WheelMenu{
;
    private _wheelMenuBrowser: Browser = new Browser("package://wheel-menu/index.html");

    public show(): void{
        this._wheelMenuBrowser.show = true;

    }

    public hide(): void{
        this._wheelMenuBrowser.show = false;
    }
    public get showStatus() {
        return this._wheelMenuBrowser.show;
    }

    public init(jsonDataSource :string ): void{
        this._wheelMenuBrowser.execute(`init(${jsonDataSource})`);
    }

   
}