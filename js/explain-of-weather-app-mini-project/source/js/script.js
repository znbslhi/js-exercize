let $=document
let CityDatas=[
    {city:'Tehran',temp:31,description:'Cloudy',humidity:26,wind:32},
    {city:'Shiraz',temp:35,description:'Windy',humidity:25,wind:20},
    {city:'Ahvaz',temp:45,description:'Sunny',humidity:30,wind:31},
    {city:'Mashhad',temp:31,description:'Cloudy',humidity:26,wind:32},
    {city:'Qom',temp:35,description:'Windy',humidity:25,wind:20},
    {city:'Esfahan',temp:45,description:'Sunny',humidity:30,wind:31}
]
let BG=['./image/01.jpg','./image/02.jpg','./image/03.jpg','./image/04.jpg','./image/05.jpg','./image/06.jpg','./image/07.jpg']
let searchBar=$.querySelector('.search-bar')
let searchB=$.getElementsByTagName('button')[0]
let CityElm=$.querySelector('.city')
let TempElm=$.querySelector('.temp')
let DesElm=$.querySelector('.description')
let humidityElm=$.querySelector('.humidity')
let windElm=$.querySelector('.wind')

searchB.addEventListener('click',function(){
    let CityMain=CityDatas.find(function(item){
        return item.city===searchBar.value
    })
    if(!CityMain)
    {
        alert('شهر مورد نظر وجود ندارد')
    }
    else{
        let randomIndex=Math.floor(Math.random()*6)
        $.body.style.backgroundImage='url('+BG[randomIndex]+')'
        $.querySelector('.weather').classList.remove('loading')
        CityElm.innerHTML='Weather in '+CityMain.city
        TempElm.innerHTML=CityMain.temp+'°C'
        DesElm.innerHTML=CityMain.description
        humidityElm.innerHTML='Humidity: '+CityMain.humidity+'%'
        windElm.innerHTML='Wind speed: '+CityMain.wind+' km/h'
    }
  
})

