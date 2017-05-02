var io = io(),
    ul = document.querySelector('body ul'),
    temperature = document.querySelector('p#temperature'),
    humidity = document.querySelector('p#humidity'),
    clicks = document.querySelector('p#clicks'),
    clicksDate = document.querySelector('p#clicks-date'),
    clickCount = 0;

// // Whenever there is news
// socket.on('', function (counter) {
//     // Catch server response
//     console.log(counter);
//
//     currentCount = counter;
//     // Ask server for another request
//     // socket.emit('my other event', { my: 'data' });
// });
//
//
// socket.on('reset', function(){
//     currentCount = 0;
// });


io.on('new tweet', function(tweet){
    ul.insertAdjacentElement('afterbegin', buildTweet(tweet));
});

io.on('sensorData', function(data){
    console.log(data);
    temperature.innerHTML = Math.floor(data.temperature)+"°C";
    humidity.innerHTML = Math.floor(data.humidity)+"%";
});

io.on('counter click', function(){
    clickCount++;
    
    var date = {
        total: new Date,
        hours: function(){console.log(this);return this.total.getHours() },
        minutes: function(){return this.total.getMinutes() },
        formated: function(){
            if (this.hours() < 10) {
                this.hours() = 0+this.hours();
            }
            if (this.minutes() < 10) {
                this.minutes() = 0+this.minutes();
            }
            return this.hours()+":"+this.minutes();
        }
    };

    console.log(clicks);
    clicks.innerHTML = clickCount;
    clicksDate.innerHTML = date.formated();
});

function buildTweet(object){
    var tweet = document.createElement('li');
    tweet.innerHTML = `
        <li>
            <img class="profilepicture" src='${object.user.profile_background_image_url}'/>
            <a class="name" href='https://twitter.com/${object.screen_name}'>${object.user.name}</a>
            <a class="username" href='https://twitter.com/${object.screen_name}'>@${object.user.screen_name}</a>
                <time class='time'>
                    ${object.created_at}
                </time>
                <p class='tweetcontent'>
                    <span class="hash">&#35;minorrealtimewebcollege</span>
                    ${object.text}
                </p>
        </li>
    `;
    return tweet;
}
