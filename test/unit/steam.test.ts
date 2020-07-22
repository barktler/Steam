/**
 * @author WMXPY
 * @namespace Steam
 * @description Steam
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from "chance";
import { SteamAPI } from "../../src";

describe('Given {ExampleAPI} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('barktler-steam-steam');

    it('should be able to construct', (): void => {

        const api: SteamAPI = SteamAPI.create();

        expect(api).to.be.instanceOf(SteamAPI);
    });
});
