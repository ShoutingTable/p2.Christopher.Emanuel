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
    slider.position(600, 930)
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
    image(capture, 600, 110, 800, 800);

    // digital clock
    clock();

    // weather
    textSize(30);
    text("City: Lubbock", 30, 850);
    text("Current temperature: " + temperature, 30, 880);
    text("Forecast: " + weather, 30, 910);

    // news
    textSize(25);
    text("The News Today:", 1500, 100, 400, 300);
    text("_________________", 1500, 105, 400, 300);
    textSize(25);
    text("•", 1500, 160)
    textSize(15);
    text(ntemp, 1510, 145, 200);
    textSize(25);
    text("•", 1500, 342)
    textSize(15);
    text(ntemp2, 1510, 325, 200);

    // calendar
    let m = month();
    textSize(60);
    text(m + '/', 1220, 100);
    let d = day()
    text(d, 1300, 100);
    textSize(50);
    text("To Do List", 30, 150);
    text("11/15", 390, 150);
    text("_________________", 40, 150);
    text("• Go to class - 11 AM", 35, 230);
    text("• Go to the gym - 1 PM", 35, 303);
    text("• Get groceries - 3 PM", 35, 380);
    text("• Cook Dinner - 5 PM", 35, 460);
    text("• Do homework - 7 PM", 35, 540);


}


// clock function
function clock() {
    fill("black");
    // textFont(clockFont);
    // textAlign(CENTER, TOP);
    textSize(100);
    let Hour = hour();
    let min = minute();
    let secs = second()
    let noon = Hour >= 12 ? " PM" : " AM"
    if (min < 10)
        min = "0" + min
    Hour %= 12
    text(Hour + ":" + min + ":" + secs + noon, 620, 100);
}

function globalNews() {
    ntemp = json1.articles[0].description;
    ntemp2 = json1.articles[1].description;

}