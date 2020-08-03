# API-Steam

[![Build Status](https://travis-ci.com/barktler/Steam.svg?branch=master)](https://travis-ci.com/barktler/Steam)
[![codecov](https://codecov.io/gh/barktler/Steam/branch/master/graph/badge.svg)](https://codecov.io/gh/barktler/Steam)
[![npm version](https://badge.fury.io/js/%40barktler-api%2Fsteam.svg)](https://www.npmjs.com/package/@barktler-api/steam)
[![downloads](https://img.shields.io/npm/dm/@barktler-api/steam.svg)](https://www.npmjs.com/package/@barktler-api/steam)

:speech_balloon: Steam APIs

## Install

```sh
yarn add @barktler-api/steam
yarn add @barktler/core # Peer Dependency
# Or
npm install @barktler-api/steam --save
npm install @barktler/core --save # Peer Dependency
```

A request driver is also required, here we install and use the `axios` driver for example.

```sh
yarn add @barktler/driver-axios
# Or
npm install @barktler/driver-axios --save
```

## Usage

```ts
import { axiosDriver } from "@barktler/driver-axios";
import { OwnedGamesDetail, SteamAPI } from "@barktler-api/steam";

(async () => {

    const steamApi: SteamAPI = SteamAPI.create('<Steam API Key>');
    steamApi.useDriver(axiosDriver);

    const detail: OwnedGamesDetail = await steamApi.getOwnedGames('<Steam ID>');

    console.log(detail);
})();
```

You can also declare a default driver for global request

```ts
import { Barktler } from "@barktler/core";
import { axiosDriver } from "@barktler/driver-axios";
import { OwnedGamesDetail, SteamAPI } from "@barktler-api/steam";

Barktler.useGlobalDefaultDriver(axiosDriver);

(async () => {

    const steamApi: SteamAPI = SteamAPI.create('<Steam API Key>');
    const detail: OwnedGamesDetail = await steamApi.getOwnedGames('<Steam ID>');

    console.log(detail);
})();
```
