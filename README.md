# Propellerhead

Application created to Developer Technical Test of Propellerhead
##### Application created based on
- [Create React App][df-create-react-app]
- [MongoDB][df-mongodb]
- [MaterialUI][df-material-ui]
- [Axios][df-axios]
- [Docker][df-docker]

## How to run

##### Run local
Node - 8.9.4
```
$ npm install
```

```
$ npm start
```

The application will be avaible on
```
http://localhost:8000
```

##### Run on docker
With Docker installed
```
$ docker-compose up --build
```

The application will be avaible on
```
http://localhost:8001
```
Friendly to cloud :)

##### Tests
Basead on [Jest][df-jest]
```
$ npm test
```

## TODO (with a little more time)
##### Features not made
- Filter and sort the list of customers.
- edit customers notes
- Change their status.

##### Tests
I've just made one test file. In the current status of the app i had few pure functions.
Nest step will SnapShots tests and extend to all the components.

##### CSS 
I did not feel the need to use CSS, MaterialUI gave me all the necessary components

##### Structure
Maybe separate in two applications: Client/Server

##### Plus
- Complete CRUD
- Redux - Actions - Sagas

[//]: #
   [df-create-react-app]: <https://github.com/facebook/create-react-app>
   [df-mongodb]: <https://material-ui.com>
   [df-material-ui]: <https://material-ui.com>
   [df-axios]: <https://github.com/axios/axios>
   [df-docker]: <https://www.docker.com>
   [df-jest]: <https://jestjs.io>

