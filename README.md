# Virtual Room 3D
The project shows basic principles of building **Typescript** / **Three.js** applications with **Gulp** and **Bower**.

![alt Screenshot](https://dl.dropboxusercontent.com/u/43792024/Github/virtual-room-3d/screenshot.png)

[Click here to see the demo](https://dl.dropboxusercontent.com/u/43792024/Github/virtual-room-3d/index.html)

## Technologies
This example uses Typescript + Less/Bootstrap + Three.js/JQuery + Bower/Gulp

**Typescript** is selected as a typesafe alternative to Javascript.

**Three.js** is used for loading and rendering 3D scenes.

## Building Project
You will need __npm__, __bower__ and __gulp__ tools installed globally.
- Navigate to the project folder
- Install npm and bower packages if needed: __npm install && bower install__
- Execute __gulp build__ to build the project once or simply __gulp__ to start it in the watch mode
- You will find compiled application in the __build__ folder

## Running Application
The application does not require any server side communication and therefore can be safely deployed to almost any existing web server.

You can use query parameters to configure application:
- __shadows=true__ to render shadows
- __latency=1000__ to set a simulated network latency in ms (default is 100ms)
