var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function() {
   modal.classList.add('modal_active');
});

setInterval( function() {
    modal.classList.remove('modal_active');
}, 5000);

