import { NTypes } from "../enums/NTypes";
import Browser from "../Browser";
export default class Notifier {

    public init(ntype: NTypes, value: string){
        var browser: Browser = new Browser("package://toast/index.html", true, false, false);
        browser.execute('showToast(${JSON.stringify([0,"Testowa wiadomosc"])})');
    }

}