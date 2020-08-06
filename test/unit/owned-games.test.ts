/**
 * @author WMXPY
 * @namespace Steam
 * @description Owned Games
 * @override Unit
 */

import { Barktler } from "@barktler/core";
import { expect } from "chai";
import * as Chance from "chance";
import { OwnedGamesDetail, SteamOwnedGamesAPI } from "../../src";

describe('Given {SteamOwnedGamesAPI} Class', (): void => {

    const chance: Chance.Chance = new Chance('barktler-steam-owned-games');

    it('should be able to construct', (): void => {

        const api: SteamOwnedGamesAPI = SteamOwnedGamesAPI.create(chance.string());

        expect(api).to.be.instanceOf(SteamOwnedGamesAPI);
        expect(api).to.be.instanceOf(Barktler);
    });

    it('should be able to fetch mock data', async (): Promise<void> => {

        const api: SteamOwnedGamesAPI = SteamOwnedGamesAPI.create(chance.string());
        api.useMockDriver();

        const response: OwnedGamesDetail = await api.fetchBySteamId(chance.string());

        expect(typeof response.game_count).to.be.equal('number');
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(Array.isArray(response.games)).to.be.true;
    });
});
