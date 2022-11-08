let container=document.createElement("div");
container.setAttribute("class","container");
container.setAttribute("id","main");

let row=document.createElement("div");
row.setAttribute("class","row");
row.setAttribute("id","main1");




container.append(row)
document.body.append(container)

async function getCountries(){
    let country=await fetch("https://restcountries.com/v3.1/all")
    let result =await country.json()
    // console.log(result)
    for(var i=0; i<result.length; i++){
        var lat=result[i].latlng[0]
        var long=result[i].latlng[1]
        
        let col=document.createElement("div");
        col.setAttribute("class","col-md-4");
        col.setAttribute("id","main2");
        col.innerHTML=`<div class="card" id="card1" style="width: 18rem;">
        <h5>${result[i].name.common}</h5>
        <img src="${result[i].flags.png}" class="card-img-top" alt="country-flag">
        <div class="card-body" id="card-body1">
          <h6 class="card-title">Capital : ${result[i].capital}</h6>
          <p class="card-text">Region : ${result[i].region}</p>
          <p class="card-text">Country code : ${result[i].cioc}</p>
          <button href="#" class="btn btn-primary" onclick="openData(${lat},${long})">Click for weather</button>
        </div>
      </div>`

      document.getElementById("main1").append(col)
    }
    
  }
  getCountries()

  async function openData(lat,long){
    let x=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=84fe7322c9d0dccd10e3c0b5a51a4ede`)
    let x1=await x.json();
    alert(`The temperature is ${x1.main.temp}`)
    
}



