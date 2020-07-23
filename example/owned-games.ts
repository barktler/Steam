/**
 * @author WMXPY
 * @namespace Example
 * @description Owned Games
 */

import { OwnedGamesDetail, SteamAPI } from "../src";

(async () => {

    const steamApi: SteamAPI = SteamAPI.create('steam api key');
    const detail: OwnedGamesDetail = await steamApi.getOwnedGames('steam id');

    console.log(detail);
})();
