let slider;
let capture;
let clockFont;
let temperature = 0;
let weather = "";
let news;
let json, json1;


// weather api, news
function preload() {
    let lbk_weather = "https://api.openweathermap.org/data/2.5/weather?q=Lubbock&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141";
    json = loadJSON(lbk_weather);
    news = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8e0a009a317842ba9a9c1b00ab486cc2";
    json1 = loadJSON(news, globalNews);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    clockFont = loadFont("digital-7.ttf");

    // brightness slider
    colorMode(HSB);
    slider = createSlider(0, 360, 60, 40)
    slider.position(600, 900)
    slider.style('width', '800px')

    // webcam capture
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    capture.hide();

    // weather
    temperature = json.main.temp;
    weather = json.weather[0].description;

    // // news
    // news = json.article[0].description;

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
    textSize(30);
    text("City: Lubbock", 110, 50);
    text("Current temperature: " + temperature, 110, 70);
    text("Forecast: " + weather, 110, 90);

    // news
    text("The news today:" + ntemp, 250, 200, 100, 100);

    // calendar
    let m = month();
    text('Current month: \n' + m, 50, 550);
    let d = day()
    text('Current day: \n' + d, 50, 650);
    text("To Do List", 250, 650);


}

// clock function
function clock() {
    fill("black");
    // textFont(clockFont);
    textAlign(CENTER, CENTER);
    textSize(100);
    let Hour = hour();
    let min = minute();
    let secs = second()
    let noon = Hour >= 12 ? " PM" : " AM"
    if (min < 10)
        min = "0" + min
    Hour %= 12
    text(Hour + ":" + min + ":" + secs + noon, width / 2, height / 2);
}

function globalNews() {
    ntemp = json1.articles[0].description;

}