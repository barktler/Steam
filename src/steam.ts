/**
 * @author WMXPY
 * @namespace Steam
 * @description Steam
 */

import { BarktlerCore } from "@barktler/core";

export class SteamAPI extends BarktlerCore {

    public static create(): SteamAPI {

        return new SteamAPI();
    }

    private constructor() {

        super();
    }
}
