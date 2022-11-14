let slider;
let capture;
let clockFont;
let temperature = 0;
let weather = "";
// let news = "";
let json;

// weather api
function preload(){
  let url = "https://api.openweathermap.org/data/2.5/weather?q=Lubbock&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141";
  json = loadJSON(url);
}

// news
// function preload() {
//   let url = "https://api.openweathermap.org/data/2.5/weather?q=Lubbock&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141";
//   json = loadJSON(url);
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  clockFont = loadFont("digital-7.ttf");
  
  // brightness slider
  colorMode(HSB);
  slider = createSlider(0, 360, 60, 40)
  slider.position(600, 900)
  slider.style('width','800px')
  
  // webcam capture
  capture = createCapture(VIDEO);
  capture.size(320,240);
  capture.hide();

  // weather
  temperature = json.main.temp;
  weather = json.weather[0].description;

  // // news
  // news = json.main.description;

}

function draw() {
  background(220);
  
  // slider value
  let val = slider.value();
  background(val, 100, 100, 1);

  // webcam value
  image(capture, 600, 40, 800, 800);

  // digital clock
  clock();

  // weather
  text("City: Lubbock", 110, 50);
  text("Current temperature: " + temperature, 110, 70);
  text("Forecast: " + weather, 110, 90);

  // news
  // text("The news today:" + news, 100, 110);
}

// clock function
function clock() {
  fill("black");
  textFont(clockFont);
  textAlign(CENTER, CENTER);
  textSize(width/4.25);
  let Hour = hour();
  let min = minute();
  let secs = second()
  let noon = Hour >= 12? " PM" : " AM"
  if(min < 10)
    min = "0"+min
  Hour%=12
  text(Hour+":"+min+":"+secs+noon, width/2, height/2); 
}

