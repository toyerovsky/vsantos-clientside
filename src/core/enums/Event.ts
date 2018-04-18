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
    playerFreeCamRequested = "playerFreeCamRequested",
    playerZoneManagerRequested = "playerZoneManagerRequested",
    playerMugshotRequested = "playerMugshotRequested",
    playerMugshotDestroyRequested = "playerMugshotDestroyRequested", 
    playerBwTimerRequested = "playerTimerRequested",
    playerBwTimerDestroyRequested = "playerTimerDestroyRequested",
    
    requestWheelMenu = "requestWheelMenu",
    useWheelMenuItem = "useWheelMenuItem",
    showWheelMenu = "showWheelMenu",
};