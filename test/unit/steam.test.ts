/**
 * @author WMXPY
 * @namespace Steam
 * @description Steam
 * @override Unit
 */

import { Barktler } from "@barktler/core";
import { expect } from "chai";
import * as Chance from "chance";
import { SteamAPI, SteamOwnedGamesAPI } from "../../src";

describe('Given {SteamAPI} Class', (): void => {

    const chance: Chance.Chance = new Chance('barktler-steam-steam');

    it('should be able to construct', (): void => {

        const factory: SteamAPI = SteamAPI.create(chance.string());

        expect(factory).to.be.instanceOf(SteamAPI);
    });

    it('should be able to construct owned games', (): void => {

        const factory: SteamAPI = SteamAPI.create(chance.string());
        const api: SteamOwnedGamesAPI = factory.createOwnedGamesAPI();

        expect(api).to.be.instanceOf(SteamOwnedGamesAPI);
        expect(api).to.be.instanceOf(Barktler);
    });
});
