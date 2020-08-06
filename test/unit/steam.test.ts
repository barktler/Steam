/**
 * @author WMXPY
 * @namespace Steam
 * @description Steam
 * @override Unit
 */

import { Barktler } from "@barktler/core";
import { expect } from "chai";
import * as Chance from "chance";
import { SteamAPI } from "../../src";

describe('Given {SteamAPI} Class', (): void => {

    const chance: Chance.Chance = new Chance('barktler-steam-steam');

    it('should be able to construct', (): void => {

        const api: SteamAPI = SteamAPI.create(chance.string());

        expect(api).to.be.instanceOf(SteamAPI);
    });

    it('should be able to construct owned games', (): void => {

        const api: SteamAPI = SteamAPI.create(chance.string());

        expect(api.ownedGames).to.be.instanceOf(Barktler);
    });
});
