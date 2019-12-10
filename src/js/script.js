
//creating the list of the food facilities based on the users' input
function myList(res) {
   // delete the contents inside the div here
    document.querySelector('.content_test').innerHTML = '';
               
    let ul = document.createElement("ul");

    for (let i = 0; i < res.length; i++) {

        let el = document.createElement("li");
        el.innerHTML = res[i];
        ul.appendChild(el);
        }
        document.querySelector('.content_test').appendChild(ul);
        }


// this is the function that give option of how users can search food facilities based on city and zip code           
function loadOption(){
    var data= document.getElementById("search");
                
    if (data.value === "") {
        alert("Please enter a city or zip");
    } else {
        if (data.placeholder === "akjdhglkja"){
            loadData(data.value);
            loadMap(data.value);
        }else{
            loadData(data.value);
            loadMap(data.value);
        }

    }
}

// load the food facilities list using the zip code
function loadData(inputs) {
    console.log('fetch'); // confirm code is running on click
    fetch('/api')
    .then(res => res.json())
    .then(res => res.data.filter(c => c.city === inputs.toUpperCase() || c.zip === inputs)) //will need to know how to retrieve input from users and use it to filter the data
    .then(res => res.map(c => [c.name,"<hr>","Inspection Results: "+ c.inspection_results,"Date: "+ c.inspection_date.substr(0,10)].join('<br/>')))
    .then(res => {
        myList(res);
        console.log(res); // logging step to check what we got
        return res;
    });
}

// loads map with markers of inputted city or zip code
function loadMap(inputs) {
    console.log('fetch'); // confirm code is running on click
    
    fetch('/api')
    .then(res => res.json())
    .then(res => res.data.filter(c => c.city === inputs.toUpperCase() || c.zip === inputs)) //will need to know how to retrieve input from users and use it to filter the data
    .then(res => res.map(c => [c.geocoded_column_1,c.name,[c.address_line_1,c.city,c.state,c.zip].join('<br/>')]))
    .then(res => {
        console.log(res); // logging step to check what we got

    // checks if the id map has something in it
    // set that id to null if it does
    var container = L.DomUtil.get('map');
    if (container != null){
        container._leaflet_id = null;
    }

    let mymap = L.map("map").setView(res[0][0]["coordinates"].reverse(), 12); //setview based on a restaurant coordinate 
    L.tileLayer(
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibXR1bmc4OCIsImEiOiJjazM5YmxmNXUwMDZ1M2pxcmtoeHh5OWx0In0.v3Sd-9s0tjXiAoRQ3tyzxQ",
        {
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 15,
            id: "mapbox.streets"
        }
    ).addTo(mymap);
    
    // makes markers for each restaurant\
    for (let i = 0; i < res.length; i++) {
        marker = new L.marker(res[i][0]["coordinates"].reverse()).bindPopup([res[i][1],res[i][2]].join('<br/>')).addTo(mymap); //[res[i][0]["coordinates"][1], res[i][0]["coordinates"][0]]
    }
    
    return mymap;
});
}
