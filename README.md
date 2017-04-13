# Explain this

## Introduction
A few years ago we were able to connect devices from the same manufacture and we called it Internet of Things (IoT). IoT had limitations since devices could only connect if they had the same manufacturer and weren't able to connect to other devices while the name suggests otherwise. As a reaction the term Web of Things was created, the name mocking IoT. Using the web every device could connect. In this project we explore the possibilities of the Web of Things.


To be able to connect devices together inside our project we used a few fundamentals. We used a button, a NeoPixel, the ESP8266 (a microcontroller), Arduino IDE (software to write code and upload it to the hardware) and a server-sided webpage to send and receive colors to and from people using the web. On the server-sided webpage you can setup a color and choose the recipient to send it to. If the button is pressed the color will be send to the chosen recipient. The NeoPixel of the recipient outputs the received color. With the above-mentioned elements we came up with a concept that would help us in our everyday life (you can read about the concept in 'About').

In this read me we will explain how we made our product and how you can build it yourself.

## About
The concept we came up with, can be used with classes and lectures.
The general idea is, that during the lecture, a student can press the button if they don't
understand it. The teacher has a lightbox on his table. The lightbox's color will change depending on how many times a button is pressed. The color will change from green to red, indicating the urgency.

You can apply this color change on the click events. So when the button is pressed 2 times,
the green color will change to yellow. The following 2 times yellow will change to orange. After that
it will change to red. When 6 or more students have pressed their button, the lightbox will have a
bright red color. This will hint the teacher, that what he is explaining, is to difficult and will need
more time to explain.

This way students won't have to interrupt the presentation but can simply press the button, to give
the teacher fast and visual feedback.


## To do
**Server**
- [ ] Set up a Node/Express Server that handles API request
- [ ] Write an API endpoint that receives a request to turn the teacher's light on
- [ ] Add a counter to indicate the urgency
- [ ] A reset function/route to reset counter when the teacher succeeds at his job
- [ ] Write an API endpoint that registers a new participant.


**Client**
- [ ] Write code to connect to the Served API
- [ ] Use socket.io for Realtime interaction
- [ ] Write code that lets the devices communicate with each other
- [ ] Give user feedback. This can be with either light or sound
- [ ] Build an html page containing:
    - A way to add/delete/monitor the participants

## Requirements
- Hardware with wifi support - Node MCU
- Software to edit code - Any text editor and the [Arduino IDE](https://www.arduino.cc/en/main/software) to upload the code to the Node MCU

## Features
 - Uses a node-MCU to regiser button press


## Install
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
