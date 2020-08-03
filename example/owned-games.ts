/**
 * @author WMXPY
 * @namespace Example
 * @description Owned Games
 */

import { axiosDriver } from "@barktler/driver-axios";
import { OwnedGamesDetail, SteamAPI } from "../src";

(async () => {

    const steamApi: SteamAPI = SteamAPI.create('steam api key');
    steamApi.useDriver(axiosDriver);

    const detail: OwnedGamesDetail = await steamApi.getOwnedGames('steam id');

    console.log(detail);
})();
