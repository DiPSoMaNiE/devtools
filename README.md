# Sportall Devtools

Welcome to the Sportall devtools!

## Requirements

- `node 20.x`
- `yarn 4.x`

The use of [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) is recommended to manage Node versions thanks to `nvm` [autoload capabilities](https://github.com/nvm-sh/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file) or`fnm` [autoload capabilities](https://github.com/Schniz/fnm#bash).

Both are able to read the `.nvmrc` file located at the root of the repository to automatically pick the right version of Node to use.

Once you've installed Node, run the following command to globally install `yarn`:

```shell
npm install -g yarn
```

## Getting started

### Install dependencies

Run the following command to install all dependencies:

```shell
yarn install
```

### Develop

Start developing by running the following command:

```shell
yarn run dev
```

### Production mode

To start apps in production mode, run the following command:

```shell
yarn run start
```

## What's inside?

### Modules

This is a [turborepo](https://turbo.build/repo) including the following modules:

- `tooling`: common devtool configurations (typescript, eslint, jest...) shared by all modules

### ESM Modules

All modules are configured as [ESM modules](https://nodejs.org/api/esm.html), please do not use CommonJS unless strictly necessary.

If some library is not ESM compatible yet, make use of `.cjs` files as a temporary workaround.

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
