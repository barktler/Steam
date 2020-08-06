/* eslint-disable camelcase */
/**
 * @author WMXPY
 * @namespace Steam_Declare
 * @description Owned Games
 */

import { Pattern } from "@sudoo/pattern"

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

export type OwnedGamesDetail = {

    readonly game_count: number;
    readonly games: OwnedGamesGame[];
};

export type OwnedGamesResponse = {

    readonly response: OwnedGamesDetail;
};

export const OwnedGamesResponsePattern: Pattern = {

    type: 'map',
    strict: true,
    map: {
        response: {
            type: 'map',
            strict: true,
            map: {
                game_count: {
                    type: 'number',
                    integer: true,
                },
                games: {
                    type: 'list',
                    element: {
                        type: 'map',
                        strict: true,
                        map: {
                            appid: {
                                type: 'number',
                            },
                            name: {
                                type: 'string',
                            },
                            playtime_forever: {
                                type: 'number',
                            },
                            img_icon_url: {
                                type: 'string',
                            },
                            img_logo_url: {
                                type: 'string',
                            },
                            playtime_windows_forever: {
                                type: 'number',
                            },
                            playtime_mac_forever: {
                                type: 'number',
                            },
                            playtime_linux_forever: {
                                type: 'number',
                            },
                        },
                    },
                },
            },
        },
    },
};
