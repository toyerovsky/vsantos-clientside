export enum RageEvent {
    browserCreated = "browserCreated",
    browserDomReady = "browserDomReady",
    browserLoadingFailed = "browserLoadingFailed",
    playerEnterCheckpoint = "playerEnterCheckpoint",
    playerExitCheckpoint = "playerExitCheckpoint",

    playerDeath = "playerDeath",
    playerSpawn = "playerSpawn",
    playerResurrect = "playerResurrect",
    playerChat = "playerChat",
    playerCommand = "playerCommand",
    playerWeaponShoot = "playerWeaponShoot",
    playerRuleTriggered = "playerRuleTriggered",
    entityStreamIn = "entityStreamIn",
    entityStreamOut = "entityStreamOut",
    vehicleDeath = "vehicleDeath",
    playerEnterColshape = "playerEnterColshape",
    playerExitColshape = "playerExitColshape",
};

export enum Event {
    playerLoginRequested = "playerLoginRequested",
    playerLoginPassed = "playerLoginPassed",
};