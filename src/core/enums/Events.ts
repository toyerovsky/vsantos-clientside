export enum RageEvent {
    entityCreated = "entityCreated",
    render = "render",
    playerJoin = "playerJoin",
    playerQuit = "playerQuit",
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
    playerEnterCheckpoint = "playerEnterCheckpoint",
    playerExitCheckpoint = "playerExitCheckpoint",
    playerEnterColshape = "playerEnterColshape",
    playerExitColshape = "playerExitColshape",
};

export enum Event {
    playerLoginRequested = "playerLoginRequested",
    playerLoginPassed = "playerLoginPassed",
};