var io = io(),
    ul = document.querySelector('body ul');
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
    console.log(tweet);
    ul.insertAdjacentElement('afterbegin', buildTweet(tweet));
});

function buildTweet(object){
    var tweet = document.createElement("li")
    tweet.innerHTML = `
        <li>
            <img src="${object.user.profile_background_image_url}"/>
            <a href="https://twitter.com/${object.screen_name}">${object.user.name}</a>
            <a href="https://twitter.com/${object.screen_name}">@${object.user.screen_name}</a>
                <time class="time">
                    ${object.created_at}
                </time>
                <p class="tweetcontent">${object.text}</p>
        </li>
    `;
    return tweet;
}
