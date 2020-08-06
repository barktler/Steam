/**
 * @author WMXPY
 * @namespace Steam
 * @description Steam
 */

import { SteamOwnedGamesAPI } from "./route/owned-games";

export class SteamAPI {

    public static create(apiKey: string): SteamAPI {

        return new SteamAPI(apiKey);
    }

    private readonly _apiKey: string;

    private constructor(apiKey: string) {

        this._apiKey = apiKey;
    }

    public createOwnedGamesAPI(): SteamOwnedGamesAPI {

        return SteamOwnedGamesAPI.create(this._apiKey);
    }
}
