<h1 align="center">
    <img alt="Proffy" title="Proffy" src=".github/logo.svg" />
</h1>

<p align="center">
  <a href="#about-project">About project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
  <img alt="Proffy" src=".github/proffy.png" width="100%">
</p>

## About project

Application to connect teachers and students, where you can search for classes by subjects and specific days and times.
Developed on the Next Level Week #02 event by [Rocketseat](http://rocketseat.com.br).

---

## Technologies

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [SQLite](https://www.sqlite.org/)
- [TypeScript](https://www.typescriptlang.org/)

---

## Getting started


### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/)
- [Expo](https://expo.io/)

**Install dependencies**

```sh
$ yarn
```


### Backend

```sh
$ yarn server knex:migrate
Run migrations
```
```sh
$ yarn server dev
Run api service
```

### Web

```sh
$ yarn web start
Start client, be sure if server (backend) is running
```

### Mobile

```sh
$ yarn mobile start
Start expo service
```
