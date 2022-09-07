var clc = document.querySelector('#clc');

var letters = 'ABCDE123456789'.split('');

clc.addEventListener('click',color);

function color() {
  var colors = '#';
for (var i=0; i<3; i++ ) {

val = Math.floor(Math.random() * letters.length);

colors += letters[val];

}
console.log(colors);

document.body.style.backgroundColor = colors;
}