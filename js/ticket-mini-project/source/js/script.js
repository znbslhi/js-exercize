let cityObj={
    Iran:['Tehran','Rasht','Tabriz','Yazd','Shiraz','Esfahan'],
    Canada:['toronto','Quebec','Montreal','Vancouver'],
    USa:['San diego','NewYork','Los Angles','Chicago','Boston']
}
    
   
let SelectBoxState=document.querySelector('.countrySelect')
let SelectBoxCity=document.querySelector('.citySelect')

SelectBoxState.addEventListener('change',function(){
    if(SelectBoxState.value=='Please Select'){
        SelectBoxCity.innerHTML=''//خالی کردن سلکت باکس
        SelectBoxCity.innerHTML+='<option class="option">Select City ...</option>'
    }else{
        let CityOpt=cityObj[SelectBoxState.value]
        SelectBoxCity.innerHTML=''
        CityOpt.forEach(function(city){
            SelectBoxCity.innerHTML+='<option class="option">'+city+'</option>' //آرایه رو به قبلیا اضافه میکنه
        })
    }
    
})

