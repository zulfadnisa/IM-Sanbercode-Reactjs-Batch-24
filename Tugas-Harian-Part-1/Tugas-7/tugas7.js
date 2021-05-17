// Terdapat sebuah class Animal yang memiliki sebuah constructor name, default property legs= 4 dan cold_blooded = false.

//soal 1
console.log("-----Soal 1 Release 0-----");
class Animal {
  constructor(nama) {
    this._name = nama;
    this._legs = 4;
    this._cold_blooded = false;
  }
  get name() {
    return this._name;
  }
  get legs() {
    return this._legs;
  }
  get cold_blooded() {
    return this._cold_blooded;
  }
  set legs(x) {
    this._legs = x;
  }
  set cold_blooded(x) {
    this._cold_blooded = x;
  }
  set name(x) {
    this._name = x;
  }
}
var sheep = new Animal("shaun", 4, false);
console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false
sheep.legs = 3;
console.log(sheep.legs);

console.log("-----Soal 1 Release 1-----");
class Frog extends Animal {
  constructor(nama) {
    super(nama);
    // super(coldBlooded);
  }
  jump() {
    return console.log("hop hop");
  }
}
class Ape extends Animal {
  constructor(nama) {
    super(nama);
    // super(coldBlooded)
  }
  yell() {
    return console.log("Auooo");
  }
}

var sungokong = new Ape("kera sakti");
sungokong.yell(); // "Auooo"
sungokong.legs = 2;
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);

var kodok = new Frog("buduk");
kodok.jump(); // "hop hop"
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);
// soal2
console.log("-----Soal 2-----");
// function Clock({ template }) {

//     var timer;

//     function render() {
//         var date = new Date();

//         var hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         var mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         var secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         var output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output);
//     }

//     this.stop = function () {
//         clearInterval(timer);
//     };

//     this.start = function () {
//         render();
//         timer = setInterval(render, 1000);
//     };

// }

class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer;
    this.output;
  }
  render() {
    var date = new Date();
    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;
    var mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;
    var secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    this.output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);
    console.log(this.output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    // this.render();
    // var rend = this.render();
    this.timer = setInterval(this.render.bind(this), 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
