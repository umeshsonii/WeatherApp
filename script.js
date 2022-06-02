
var flag = 1;
let weather={
    apiKey : "f8229e49232d329b41e5ac2a10b9ca7e",
    fetchWeather: (city) =>{
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=" + weather.apiKey)
        .then((response)=> response.status).then((data)=> {
        if( data == "404") {
            document.getElementById("warning").style.display = "block";
        
        }   
        else{
            console.log(data);
            document.getElementById("warning").style.display = "none";
            fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=" + weather.apiKey)
            .then((response)=>response.json())
            .then((data)=>weather.displayWeather(data));
          
        if(flag%2 == 0){
            document.body.style.backgroundImage = "url('https://picsum.photos/1920/1080?"+city+"')";
            flag++;

        }
        else if(flag%2 != 0){
            document.body.style.backgroundImage = "url('https://picsum.photos/1920/1080?"+city+"')";
            flag++;
        }
        setTimeout(() => {
            document.querySelector(".searchbar").value = "";
          }, "500");

        }
        });
        
       
     
    },
    displayWeather : (data)=>{
        const { name } = data;
        const {icon , description } = data.weather[0];
        const { temp } = data.main;
        const { humidity } = data.main;
        const { speed } = data.wind;
        const newTemp = Math.ceil(temp);
        const cityPic = "url('https://picsum.photos/1920/1080?city')";
        const landPic = "url('https://picsum.photos/1920/1080?landscape')";
        // console.log(name, icon , description, temp, humidity, speed);
        document.querySelector('.city').innerHTML = name;
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = newTemp+"°";
        document.querySelector(".wicon").src = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}%`;
        document.querySelector(".wind").innerHTML = `Wind: ${speed}km/h`;
        
        // if(  document.body.style.backgroundImage == landPic){
        //     document.body.style.backgroundImage = cityPic;
        // }
        // else if(document.body.style.backgroundImage == cityPic ){
        //     document.body.style.backgroundImage = landPic;
        // }
       
    },
    search : ()=>{
        weather.fetchWeather(document.querySelector(".searchbar").value)
    }
};

const cityPic = "url('https://picsum.photos/1920/1080?city')";
const landPic = "url('https://picsum.photos/1920/1080?landscape')";


document.querySelector(".search button").addEventListener('click', ()=>{
    weather.search();
    console.log("Work");
    // let city = document.querySelector(".searchbar").value
    //     if(flag%2 == 0){
    //         document.body.style.backgroundImage = "url('https://picsum.photos/1920/1080?"+city+"')";
    //         flag++;

    //     }
    //     else if(flag%2 != 0){
    //         document.body.style.backgroundImage = "url('https://picsum.photos/1920/1080?"+city+"')";
    //         flag++;
    //     }
    //     setTimeout(() => {
    //         document.querySelector(".searchbar").value = "";
    //       }, "500");

});

document.querySelector(".searchbar").addEventListener("keyup", (event)=>{
if(event.key == "Enter"){
    weather.search();
    console.log("Work"); 
    // let city = document.querySelector(".searchbar").value
    // if(flag%2 == 0){
    //     document.body.style.backgroundImage = "url('https://picsum.photos/1920/1080?"+city+"')";
    //     console.log("change1");
    //     flag++;
    // }
    // else if(flag%2 != 0 ){
    //     document.body.style.backgroundImage = "url('https://picsum.photos/1920/1080?"+city+"')";
    //     console.log("change2");
    //     flag++;
    // }
    // setTimeout(() => {
    //     document.querySelector(".searchbar").value = "";
    //   }, "500");
}
});

weather.fetchWeather("London");

// fetch("https://api.openweathermap.org/data/2.5/weather?q=xvcv&units=metric&appid=" + weather.apiKey)
//         .then((response)=> response.status).then((data)=> {
        
//             console.log(data);
//         }
//         );