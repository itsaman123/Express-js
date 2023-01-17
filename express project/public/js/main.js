
const cityName=document.getElementById('cityName');
const submitBtn=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');

const temp=document.getElementById('temp');

const getinfo=(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    // let url='https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=32ba0bfed592484379e51106cef3f204'
    if(cityName===""){
        city_name.innerText=`pleasw write the city name`
    }
    else{
        try{

            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=32ba0bfed592484379e51106cef3f204`
            const response=await fetch(url);
            const data=await response.json();
            const arrData=[data];
            console.log(response);
            city_name.innerText=`${arr[0].name}, ${arrData[0].sys.country}`;
            temp.innerText=arrData[0].main.temp;
            temp_status.innerText=arrData[0].weather[0].main;
        }
        catch{
            city_name.innerText=`pleasw write the city name`
        }

    }
}
submitBtn.addEventListener('click',getinfo)


// 'https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=32ba0bfed592484379e51106cef3f204'