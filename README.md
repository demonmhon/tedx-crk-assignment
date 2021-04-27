# tedxcrk-assignment

Cloned from [demonmhon/react-16x-starter](https://github.com/demonmhon/react-16x-starter)

Assignment for front-end develop of TEDxCharoenkrung

## Getting started

For development, set your environment variables in `.env.development`, update all variables with correct values

```bash
$ cp .env.example .env.development
```

> `.env.development` is for local development, it ignored by git.

Install dependencies

```bash
$ npm install
```

The start the development server (webpack) with

```bash
$ npm start:dev
```


## Scripts

| Script | Description |
|-|-|
| `start` | Alias of `start:dev` |
| `start:docker` | Start the app with docker (required `build:docker` first) |
| `start:dev` | Start the app with `development` mode, `webpack-dev-server` and hot reload enabled |
| `test` | Jest and execute all the tests |
| `test:coverage` | Generate a coverage report |
| `test:watch` | Run all the tests and keep on watch mode |
| `build` | Build the production build |
| `build:docker` | Build docker image |


## Further Resources

For starter components. Find out more on [react-16x-starter-components](https://github.com/demonmhon/react-16x-starter-components).


## License

[MIT](LICENSE.md)
