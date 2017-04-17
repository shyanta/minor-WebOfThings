var socket = io(),
    currentCount = document.querySelector('h1 span').innerHTML;

// Whenever there is news
socket.on('counter', function (counter) {
    // Catch server response
    console.log(counter);

    currentCount = counter;
    // Ask server for another request
    // socket.emit('my other event', { my: 'data' });
});


socket.on('reset', function(){
    currentCount = 0;
});
