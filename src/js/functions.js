var resultDiv = document.getElementById("result");
var httpRequest;
      
function makeRequest(url) {
    httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
          alert('Giving up :( Cannot create an XMLHTTP instance');
          return false;
        }
    httpRequest.onreadystatechange = getResult;
    httpRequest.open('GET', url);
    httpRequest.send();
}

function getResult() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var result = JSON.parse(httpRequest.responseText); // asking website to give him the dataset & put into json obj
            console.log(result); //log out the data
            //pull out the data 
            var str = '';
            var name = document.getElementById('name').value; // id tag of an element <div id = whatever
            var category = document.getElementById('category').value;
            var zip = document.getElementById('zip').value;
            var arr = [];
            // loop in the data
            for (var i = 0, len = result.length; i < len; i++) {
                if (name != '') { // if the name is not blank
                    if (name == result[i].name && category == result[i].category && zip == result[i].zip) {
                        str += '<tr><td>' + result[i].name + '</td><td>' + result[i].category + '</td><td>' + result[i].inspection_date + '</td><td>' + result[i].inspection_results + '</td><td>'+ result[i].city + '</td><td>' + result[i].zip + '</td><td>' + result[i].address_line_1 + '</td><td>' + result[i].address_line_2 + '</td><td>' + result[i].inspection_type + '</td></tr>';
                    }
                } else {
                    str += '<tr><td>' + result[i].name + '</td><td>' + result[i].category + '</td><td>' + result[i].inspection_date + '</td><td>' + result[i].inspection_results + '</td><td>'+ result[i].city + '</td><td>' + result[i].zip + '</td><td>' + result[i].address_line_1 + '</td><td>' + result[i].address_line_2 + '</td><td>' + result[i].inspection_type + '</td></tr>';
                }
            }
            document.getElementById('result').innerHTML = str;
        } else {
            alert('There was a problem with the request.');
        }
    }
}
function search(s) {
    if (s != 0) {
        var name = document.getElementById('name').value;
        var category = document.getElementById('category').value;
        var zip = document.getElementById('zip').value;
        if (name == '') {
            alert('Name is required');
            return;
          }
        if (category == '') {
            alert('Category is required');
            return;
        }
        if (zip == '') {
            alert('Zip is required');
            return;
        }
    }
}