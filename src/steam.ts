/**
 * @author WMXPY
 * @namespace Steam
 * @description Steam
 */

import { BarktlerCore } from "@barktler/core";
import { axiosDriver } from "@barktler/driver-axios";
import { OwnedGamesDetail, OwnedGamesResponse } from "./declare/owned-games";

export class SteamAPI extends BarktlerCore {

    public static create(apiKey: string): SteamAPI {

        return new SteamAPI(apiKey);
    }

    private readonly _apiKey: string;

    private constructor(apiKey: string) {

        super();

        super.useDriver(axiosDriver);
        this._apiKey = apiKey;
    }

    public async getOwnedGames(steamId: string): Promise<OwnedGamesDetail> {

        const response: OwnedGamesResponse = await this._sendRequest({

            url: 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/',
            method: 'GET',
            params: {
                key: this._apiKey,
                steamid: steamId.toString(),
                include_appinfo: 'true',
                include_played_free_games: 'true',
            },
        });
        return response.response;
    }
}
