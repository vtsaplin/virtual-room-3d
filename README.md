# Smart House Simulator
The project serves as a simple example illustrating basic principles of building Javascript application with **Gulp** and **Bower**.

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

## The Concept
The core concept is the observable Parameter which has a value ranging from 0 to 1. Parameters control the behavior of the virtual devices and can depend on each other. Devices are represented by 3D objects and light sources rendered on the screen. When the scene is loaded the application in its _init_ method looks for a specific object by name and wires it to the _VirtualDevice_. A _VirtualDevice_ is an object that encapsulates the state and exposes it via a set of parameters. Every _VirtualDevice_ has the _update_ method which are called by _VirtualDeviceManager_ on every frame. A _VirtualDevice_ can update its state in this method.

## Extending Functionality
- Add new object to the scene which will be simulated
- Create new class and implement _VirtualDevice_ interface
- Implement the device behavior and expose the state via parameters
- Create UI controls linked to parameters using _ViewFactory_

## TODOs
- Implement more virtual devices
- Add code comments
- Add tests
