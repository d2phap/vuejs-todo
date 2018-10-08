# Vuejs ToDo App
A to-do list is a simple but effective way to manage tasks.

Live Demo: https://d2phap.github.io/vuejs-todo

## User Stories
- As a user, I need to be able to add an activity (item to the list).
- As a user, I need to be able to update the activity (toggle status between
completed/not completed).
- As a user, I need to be able to delete the activity.
- As a user, I need to be able to list all the activities when the page is first loaded or
reloaded.

## Notes
- A sample Vue.js project can be created via vue-cli as explained here:
https://github.com/vuejs/vue-cli
- The application should follow the Flux/Redux architecture principles in terms of app
state management and uni-directional data flow.
- In order to maintain the list state between the page reloads, you can use
localStorage.
- Design and create an API blueprint for the REST API using the service of your choice,
this API should cover all the user stories above.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

## Deployment
- Set correct `baseUrl` in [/client/vue.config.js](https://github.com/d2phap/vuejs-todo/blob/master/client/vue.config.js)
- Compile and minifie source code for production: `npm run build`
- Upload all files in `/dist` folder to the hosting

## API blueprint design
#### API design
[/server/ToDo-API.md](https://github.com/d2phap/vuejs-todo/blob/master/server/ToDo-API.md)

#### Postman API collection
[/server/Vuejs ToDo App.postman_collection.json](https://github.com/d2phap/vuejs-todo/blob/master/server/Vuejs%20ToDo%20App.postman_collection.json)

#### Mock API
http://private-0e4345-d2phap.apiary-mock.com/
