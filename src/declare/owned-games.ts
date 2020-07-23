/* eslint-disable camelcase */
/**
 * @author WMXPY
 * @namespace Steam_Declare
 * @description Owned Games
 */

export type OwnedGamesGame = {

    readonly appid: number;
    readonly name: string;
    readonly playtime_forever: number;
    readonly img_icon_url: string;
    readonly img_logo_url: string;
    readonly playtime_windows_forever: number;
    readonly playtime_mac_forever: number;
    readonly playtime_linux_forever: number;
};

export type OwnedGamesResponse = {

    readonly game_count: number;
    readonly games: OwnedGamesGame[];
};
