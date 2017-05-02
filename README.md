# Explain this

## Introduction
A few years ago we were able to connect devices from the same manufacture and we called it *Internet of Things (IoT)*. IoT had limitations since devices could only connect if they had the same manufacturer and weren't able to connect to other devices while the name suggests otherwise. As a reaction the term Web of Things was created, the name mocking IoT. Using the web every device could connect. In this project we explore the possibilities of *Web of Things*.

To be able to connect devices together inside our project we used a few fundamentals. We used a button, a NeoPixel, Node MCU (a microcontroller), Arduino IDE (software to write code and upload it to the hardware) and a server-sided webpage to send and receive colors to and from people using the web. On the server-sided webpage you can setup a color and choose the recipient to send it to. If the button is pressed the color will be send to the chosen recipient. The NeoPixel of the recipient outputs the received color. With the above-mentioned elements we came up with a concept that would help us in our everyday life (you can read about the concept in 'About').

In this read me we will explain how we made our product and how you can build it yourself.

## About
The concept we came up with, can be used with classes and lectures.
The general idea is that during the lecture a student can press the button if they don't
understand it. The teacher has a lightbox on his table. The lightbox' color will change depending on how many times a button is pressed. The color will change from green to red, indicating the urgency.

You can apply this color change on the click events. So when one student presses the button,
the green color will change to yellow. When another student presses the button, the yellow color will change to orange. After that the color will change into red. The teacher can decide at any moment to pause the lecture and give further information about the subject that's unclear. When the student comprehends the explanation he or she can press the button again which will turn the red color into green again.

This way students won't have to interrupt the lecture but can simply press the button to give
the teacher fast and visual feedback.

## To do
**Server**
- [x] Set up a Node/Express Server that handles API request
- [x] Write an API endpoint that receives a request to turn the teacher's light on
- [x] Add a counter to indicate the urgency
- [x] A reset function/route to reset counter when the teacher succeeds at his job
- [x] Contact with Twitter API

**Client**
- [x] Write code to connect to the Served API
- [x] Use socket.io for Realtime interaction
- [x] Write code that lets the devices communicate with each other
- [x] Give user feedback. This can be with either light or sound
- [ ] Build an html page containing:
    - [x] style.css
    - [ ] the current room temperature and humidity
    - [ ] twitter stream that follows the hashtag *minorrealtimewebcollege*

**Documentation**
- [ ] Complete read me
- [ ] Flowchart

## Requirements
- Hardware with wifi support - Node MCU
- Software to edit code - Any text editor and the [Arduino IDE](https://www.arduino.cc/en/main/software) to upload the code to the Node MCU
- A button to connect to the Node MCU
- NeoPixel
- Temperature and Humidity sensor
- Twitter API

## Features
 - Uses a node-MCU to register button press.
 - Can get temperature and humidity of the room.
 - Dashboard keeps the teacher updated on questions

## Installation
**Locally**
- First clone this repo with:
```txt
$ git clone https://github.com/shyanta/minor-WebOfThingsDemo.git
```

- then run:
```
$ npm install && npm run dev
```
this should start the app in your localhost.

**Live**

- To view it live on other devices run:
```
$ npm install && npm run dev
```
- keep this terminal open an open another one and run:
```
$ npm run ngrok
```
this should give you a http link.

## License
