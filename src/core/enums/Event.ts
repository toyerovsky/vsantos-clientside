export enum RageEvent {
    browserCreated = "browserCreated",
    browserDomReady = "browserDomReady",
    browserLoadingFailed = "browserLoadingFailed",
    playerEnterCheckpoint = "playerEnterCheckpoint",
    playerExitCheckpoint = "playerExitCheckpoint",
    playerEnterColshape = "playerEnterColshape",
    playerExitColshape = "playerExitColshape",

    render = "render",
};

export enum Event {
    playerLoginRequested = "playerLoginRequested",
    playerLoginPassed = "playerLoginPassed",
    playerNotifyRequested = "playerNotifyRequested",
    characterSelectRequested = "characterSelectRequested",
    characterMoneyChangeRequested = "characterMoneyChangeRequested",
    playerFreeCamRequested = "playerFreeCamRequested"
};