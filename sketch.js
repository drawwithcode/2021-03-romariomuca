let song;
let img;
let cnv;
let pazzia;
let incr = 4; //incremeto nei cicli x vedere i pixel della foto
frameRate = 10;

function preload() {
  img = loadImage("assets/img11.jpg");
  song = loadSound("assets/song.mp3");
  data = loadJSON("./assets/Niceforo e i pazzi.json");
}

function setup() {
  //console.log(data.pazzia[1].pazzi);
  song.loop();
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width) / 2;
  let newCanvasY = (windowHeight - img.height) / 2;
  cnv.position(newCanvasX, newCanvasY);

  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
}

function draw() {
  let volume = analyzer.getLevel(); //from 0 to 1
  //console.log(volume);
  volume = map(volume, 0, 1, 5, 110);
  //  background(200);
  //access the pixel information of image

  //NORD
  for (let col = 0; col < img.width; col += incr) {
    for (let row = 0; row < img.height / 3; row += incr) {
      let c = img.get(col, row);
      fill(color(c));
      noStroke();
      angleMode(DEGREES);
      let c1 = col - data.pazzia[0].pazzi / 10;
      let r1 = row - data.pazzia[0].pazzi / 10;
      arc(random(c1, col), random(r1, row), volume / 2, volume, 0, frameCount);
    }
  }

  //CENTRO
  for (let col = 0; col < img.width; col += incr) {
    for (
      let row = img.height / 3 + incr;
      row < (img.height / 3) * 2;
      row += incr
    ) {
      let c = img.get(col, row);
      fill(color(c));
      noStroke();
      angleMode(DEGREES);
      let c1 = col - data.pazzia[1].pazzi / 10;
      let r1 = row - data.pazzia[1].pazzi / 10;
      arc(random(c1, col), random(r1, row), volume / 2, volume, 0, frameCount);
    }
  }

  //SUD
  for (let col = 0; col < img.width; col += incr) {
    for (let row = (img.height / 3) * 2 + incr; row < img.height; row += incr) {
      let c = img.get(col, row);
      fill(color(c));
      noStroke();
      //strokeWeight(80);
      //point(col, row);
      angleMode(DEGREES);
      let c1 = col - data.pazzia[2].pazzi / 10;
      let r1 = row - data.pazzia[2].pazzi / 10;
      arc(random(c1, col), random(r1, row), volume / 2, volume, 0, frameCount);
    }
  }
  //let songRate = map(mouseY, 0, height, 2, -2);
  //mySong.rate(songRate);
}
