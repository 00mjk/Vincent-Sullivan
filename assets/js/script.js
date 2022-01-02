let fontFace = new FontFace('Roboto', 'url(https://fonts.example.com/roboto.woff2)');
console.log(fontFace.family); // 'Roboto'

fontFace.family = 'newRoboto';
console.log(fontFace.family); // 'newRoboto'

let P1URL = document.getElementById('note-taker')
P1URL.addEventListener('click', function() {
    var window = window.open("https://vlsulliv.github.io/note-taker/", "_blank")
})