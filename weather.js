function displayresult()
{
    var city=document.getElementById("city").value;
    var apikey='c9fea520fb12cad5e95b16d317a8082b';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric')
    .then(response=>response.json())
    .then (data =>
    {
        var t= data['main']['temp']
        document.getElementById("output").innerHTML=t;
    })
}
