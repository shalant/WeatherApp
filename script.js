
  $("#search_btn").on("click", function(){
    var myStorage = window.localStorage;
    var history = JSON.parse(myStorage.getItem("history"))||[];
    let search_input = $("#search_input").val()
    $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q="+ search_input +"&appid=b04b2a052fb4b71af764d1f2a6d8f3ab",
    method: "GET"
  }).then(function(response) {
    console.log(response);
    let cityName = response.name;
    let temperature = response.main.temp;
    let temperatureF = temperature * 9/5 - 459.67
    let humidity = response.main.humidity;
    let windSpeed = response.wind.speed;
    //let latitude = response.city.coord.lat;
    //console.log(latitude);
    //let longitude = response.city.coord.lon;
    //$.ajax({
      //  url: "http://samples.openweathermap.org/data/2.5/uvi/forecast?lat="+ latitude + longitude +"&appid=439d4b804bc8187953eb36d2a8c26a02",
    //})
    let uvIndex = response.main.uvi;
    let iconCode = response.weather[0].icon;
    let iconURL = "http://openweathermap.org/img/wn/10d@2x.png" + iconCode + ".png";
    history.push(response.name);
    myStorage.setItem('history', JSON.stringify(history))
    //add loop
    //jquery method .each
    console.log("myStorage-->" , myStorage);
     
    //display stuff
    $("#cityName").text(cityName)
    $("#temperature").text(temperatureF);
    $("#humidity").text(humidity);
    $("#wind_speed").html(windSpeed);
    $("#ultra_violet_index").text(uvIndex);
    $("#iconId").html(`<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Icon depicting current weather.">`);
  });
  });

  $("#search_history").add("button");
  //document.createElement

  //make sure this is translated to jquery
//var btn = document.createElement("BUTTON");
//btn.innerHTML = "search_input";
//document.body.appendChild(btn); 


//for 5-day use:
//https://openweathermap.org/forecast5#name5

$("#search_btn").on("click", function(){
  let search_input = $("#search_input").val()
    $.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q="+ search_input +"&appid=b04b2a052fb4b71af764d1f2a6d8f3ab",
    method: "GET"
    }).then(function(response) {
      let temperature = response.main.temp;
      let temperatureF = temperature * 9/5 - 459.67;
      let humidity = response.main.humidity;
      let windSpeed = response.wind.speed;
      console.log("blah");
      console.log(humidity);
      $('#dayOne')
        $("#temperature").text(temperatureF);
        $("#humidity").text(humidity);
        $("#wind_speed").html(windSpeed);

      $('#dayTwo')
        $("#temperature").text(temperatureF);
        $("#humidity").text(humidity);
        $("#wind_speed").html(windSpeed);
     
      $('#dayThree')
        $("#temperature").text(temperatureF);
        $("#humidity").text(humidity);
        $("#wind_speed").html(windSpeed);

      $('#dayFour')
        $("#temperature").text(temperatureF);
        $("#humidity").text(humidity);
        $("#wind_speed").html(windSpeed);

      $('#dayFive')
        $("#temperature").text(temperatureF);
        $("#humidity").text(humidity);
        $("#wind_speed").html(windSpeed);
    })
})
