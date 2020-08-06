/**
 * @author WMXPY
 * @namespace Steam_Route
 * @description Owned Games
 */

import { Barktler } from "@barktler/core";
import { OwnedGamesDetail, OwnedGamesResponse, OwnedGamesResponsePattern } from "../declare/owned-games";

export class SteamOwnedGamesAPI extends Barktler<any, OwnedGamesResponse> {

    public static create(apiKey: string): SteamOwnedGamesAPI {

        return new SteamOwnedGamesAPI(apiKey);
    }

    private readonly _apiKey: string;

    private constructor(apiKey: string) {

        super();

        this._apiKey = apiKey;
        super._declareResponseDataPattern(OwnedGamesResponsePattern);
    }

    public async fetchBySteamId(steamId: string): Promise<OwnedGamesDetail> {

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
