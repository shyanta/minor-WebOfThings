# Explain this
![Meme of Futurama which says 'I don't get it'](https://img.memesuper.com/751ece9e82c96d39b19fb5824fd1e447_not-sure-if-i-dont-get-it-or-meme-i-dont-get-it_603-452.jpeg)

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

During the lecture students can tweet their question using a hashtag which will be displayed on the teachers dashboard. The dashboard will be a webapplication. Sensors in the room can also measure temperature and humidity which will also be displayed on the dashboard. When room temperature rises students' concentration drops.

## To do
**Server**
- [x] Set up a Node/Express Server that handles API request
- [x] Write an API endpoint that receives a request to turn the teacher's light on
- [x] Add a counter to indicate the urgency
- [x] A reset function/route to reset counter when the teacher succeeds at his job
- [x] Contact with Twitter API.
- [ ] Sensor passes temperature and humidity to node server.

**Client**
- [x] Write code to connect to the Served API
- [x] Use socket.io for Realtime interaction
- [x] Write code that lets the devices communicate with each other
- [x] Give user feedback. This can be with either light or sound
- [ ] Build an html page containing:
    - [x] style.css.
    - [x] the current room temperature and humidity.
    - [ ] twitter stream that follows the hashtag *minorrealtimewebcollege*.
    - [ ] last button press of student.
    - [ ] amount of clicks during lecture.

**Documentation**
- [x] Complete read me.
- [ ] Code comments.
- [ ] Flowchart.

## Requirements
- Hardware with wifi support - Node MCU.
- Software to edit code - Any text editor and the [Arduino IDE](https://www.arduino.cc/en/main/software) to upload the code to the Node MCU.
- A button to connect to the Node MCU.
- NeoPixel.
- Breadboard.
- Temperature and Humidity sensor.
- Twitter API.
- (Optional) box for hardware and button.

## Features
 - Uses a node-MCU to register button press.
 - Student can press the button to indicate that he doesn't comprehend the topic.
 - Can get temperature and humidity of the room.
 - Dashboard keeps the teacher updated on questions asked through twitter.
 - Dashboard tells teacher temperature and humidity.

## Get started
### Packages
Besides the packages [Express](https://www.npmjs.com/package/express), [Path](https://www.npmjs.com/package/path), [Body Parser](https://www.npmjs.com/package/body-parser) and [Twitter](https://www.npmjs.com/package/twitter) we use the next packages:

#### Dotenv
If you want to use the Twitter API you will need to hide your given tokens (if you want to upload the code or share it). Tokens can be placed into the .env file and that file can be placed in the .gitignore.

#### Socket.io
To see tweets posted real-time in the dashboard socket.io was used.

#### Serialport
To read out the serial monitor the node-module Serialport was used. This way temperature and humidity can easily be sent to the app.

### Installation
First clone this repo in your terminal with:
```txt
$ git clone https://github.com/shyanta/minor-WebOfThingsDemo.git
```

To install all packages required run:
```
$ npm install
```
The webapp will not work yet since you need to have a view things from Twitter.

#### Get API key from Twitter
#### Software
Go to [Twitter](https://dev.twitter.com/), create an account if you don't have one or create an app if you do. Fill out the form to get a consumers key and consumers secret. After that request your own access token to get an access token key and an access token secret. Optional: place the tokens into a .env file like so:
```
CONSUMER_KEY = ''
CONSUMER_SECRET = ''
ACCESS_TOKEN_KEY = ''
ACCESS_TOKEN_SECRET = ''
```

After that you could start the app in your localhost:3000:
```
$ npm run dev
```
To view it live on other devices keep this terminal open, open another terminal and run:
```
$ npm run ngrok
```
this should give you a http link. Copy this link into your browser to view the dashboard.

#### Hardware
**How to set up button**
The button has two pins, one has to go to the ground (GND) and one in one one of the D-pins (like D2).

**How to set up Adafruit Neopixel:**
https://www.youtube.com/watch?v=ydh0neRNxOA

**How to set up the humidity and temperature sensor:**
https://www.youtube.com/watch?v=oZ-oFY6TiPw&t=192s

Once you've put everything together plug the Node MCU into your computer and upload the file BetalCU1.ino on to your Node MCU. You can find this file in the cloned repo > Arduino > BetalCU1 > BetalCU1.ino. Once uploaded you are ready to go!

## License
MIT/X11.
