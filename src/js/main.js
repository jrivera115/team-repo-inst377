function changePlaceholder(){
    var data = document.getElementById("search");
    if (data.placeholder === "e.g. College Park"){
      data.placeholder = "e.g. 20740";
    } else {
      data.placeholder = "e.g. College Park";
      
    }
    console.log(data);
    return data;
}
function loadOption(){
    var data = document.getElementById("search");
    if (data.placeholder === "e.g. College Park"){
      loadDataCity();
    } else {
      loadDataZip();
    }
}

function loadDataZip(){
  console.log('fetch'); // confirm code is running on click
  fetch('/api')
    .then(res => res.json())
    .then(res => res.data.filter(c => c.zip === 20740))
    .then(res => res.map(c => c.name))
    .then(res => {
      myList(res);
      console.log(res); // logging step to check what we got
      return res;
    });
}

  function loadDataCity() {
  console.log('fetch'); // confirm code is running on click
  fetch('/api')
    .then(res => res.json())
    .then(res => res.data.filter(c => c.city === "COLLEGE PARK"))
    .then(res => res.map(c => c.name))
    .then(res => {
      myList(res);
      console.log(res); // logging step to check what we got
      return res;
    });
}

  function myList(res){
    let ol = document.createElement("ol");
    for(let i = 0; i < res.length; i ++){
      
      let el = document.createElement("li");
      el.innerHTML = res[i];
      ol.appendChild(el);
    }
    document.querySelector('.content_test').appendChild(ol);
}